import { LIGHTING_CONFIG } from '../../sceneConfig'

export function Lighting() {
	return (
		<>
			<ambientLight color={LIGHTING_CONFIG.color} intensity={0.3} />
			<spotLight
				position={LIGHTING_CONFIG.spotlightPosition}
				color={LIGHTING_CONFIG.color}
				intensity={80000}
				distance={200}
				penumbra={1}
				angle={1}
				castShadow
				shadow-bias={-0.0003}
				shadow-mapSize={[256, 256]}
			/>
		</>
	)
}
