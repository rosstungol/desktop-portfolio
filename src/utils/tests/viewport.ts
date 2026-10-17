/**
 * Sets the happy-dom viewport size and fires a `resize` event. happy-dom
 * exposes `innerWidth`/`innerHeight` as readonly, so they are redefined.
 */
export const setViewport = (width: number, height: number = 800) => {
	Object.defineProperty(window, 'innerWidth', {
		configurable: true,
		value: width,
	})
	Object.defineProperty(window, 'innerHeight', {
		configurable: true,
		value: height,
	})
	window.dispatchEvent(new Event('resize'))
}
