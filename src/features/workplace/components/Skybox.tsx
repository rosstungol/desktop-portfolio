import { Environment } from '@react-three/drei'

export default function Skybox() {
	return (
		<Environment
			background
			files={[
				'/workplace/skybox/corona_ft.webp',
				'/workplace/skybox/corona_bk.webp',
				'/workplace/skybox/corona_up.webp',
				'/workplace/skybox/corona_dn.webp',
				'/workplace/skybox/corona_rt.webp',
				'/workplace/skybox/corona_lf.webp',
			]}
		/>
	)
}
