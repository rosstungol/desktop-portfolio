// Build-time guards for the emitted chunk graph. Runs after `vp build` and
// fails the build when:
//   1. the three.js chunk re-enters the entry preload graph, or
//   2. emitted chunks form a static-import cycle while vite.config.ts does
//      not enable output.strictExecutionOrder. Cross-chunk cycles then
//      execute in the wrong order (class vars still unassigned when a
//      sibling chunk body runs) and the app crashes behind ErrorBoundary.
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const fail = (msg) => {
	console.error(`check-dist-graph: ${msg}`)
	process.exit(1)
}

const hasCycle = (edges) => {
	const graph = new Map()
	for (const [from, to] of edges) {
		if (!graph.has(from)) graph.set(from, [])
		graph.get(from).push(to)
	}
	const visiting = new Set()
	const done = new Set()
	const walk = (node) => {
		if (visiting.has(node)) return true
		if (done.has(node)) return false
		visiting.add(node)
		for (const next of graph.get(node) ?? []) if (walk(next)) return true
		visiting.delete(node)
		done.add(node)
		return false
	}
	return [...graph.keys()].some(walk)
}

const allowsStrictOrder = (configSource) => {
	const code = configSource
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/\/\/[^\n]*/g, '')
	return /strictExecutionOrder\s*:\s*true/.test(code)
}

// Self-test: the guard must fail when its own logic stops working.
if (
	!hasCycle([
		['a', 'b'],
		['b', 'a'],
	])
)
	fail('self-test: cycle not detected')
if (
	hasCycle([
		['a', 'b'],
		['b', 'c'],
	])
)
	fail('self-test: false cycle')
if (allowsStrictOrder('// strictExecutionOrder: true'))
	fail('self-test: comment treated as enabled config')
if (!allowsStrictOrder('strictExecutionOrder: true,'))
	fail('self-test: enabled config not seen')

// 1. Entry graph: no modulepreload of the three chunk in the HTML.
const html = readFileSync('dist/index.html', 'utf8')
if (/modulepreload[^>]*three-/.test(html))
	fail(
		'three.js leaked back into the entry graph (modulepreload of three chunk)'
	)

// 2. Static cycles across emitted chunks require strict execution order.
const assetsDir = 'dist/assets'
const edges = []
for (const file of readdirSync(assetsDir)) {
	if (!file.endsWith('.js')) continue
	const src = readFileSync(path.join(assetsDir, file), 'utf8')
	const targets = [
		...src.matchAll(/from\s*["'](\.\/[^"']+)["']/g),
		...src.matchAll(/import\s*["'](\.\/[^"']+)["']/g),
	]
	for (const [, target] of targets) edges.push([file, path.basename(target)])
}
if (
	hasCycle(edges) &&
	!allowsStrictOrder(readFileSync('vite.config.ts', 'utf8'))
)
	fail(
		'chunk graph has a static-import cycle and vite.config.ts lacks ' +
			'strictExecutionOrder: true — cross-chunk init order would be unguaranteed'
	)
console.log(`check-dist-graph: ok (${edges.length} chunk edges checked)`)
