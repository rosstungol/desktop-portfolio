import { Bloom, EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function Effects() {
	return (
		<EffectComposer>
			<Bloom intensity={1} luminanceThreshold={0.5} luminanceSmoothing={0.5} />
			<Noise opacity={0.03} blendFunction={BlendFunction.VIVID_LIGHT} />
		</EffectComposer>
	)
}
