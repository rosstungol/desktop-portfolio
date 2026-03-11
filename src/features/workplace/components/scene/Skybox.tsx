import { Environment } from '@react-three/drei'

export function Skybox() {
	return (
		<Environment
			background
			files={[
				'/workplace/skybox/corona-ft.webp',
				'/workplace/skybox/corona-bk.webp',
				'/workplace/skybox/corona-up.webp',
				'/workplace/skybox/corona-dn.webp',
				'/workplace/skybox/corona-rt.webp',
				'/workplace/skybox/corona-lf.webp',
			]}
		/>
	)
}
