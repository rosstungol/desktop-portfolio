import { Environment } from '@react-three/drei'

export default function WorkplaceEnvironment() {
  return (
    <Environment
      background
      files={[
        '/skybox/corona_ft.jpg',
        '/skybox/corona_bk.jpg',
        '/skybox/corona_up.jpg',
        '/skybox/corona_dn.jpg',
        '/skybox/corona_rt.jpg',
        '/skybox/corona_lf.jpg',
      ]}
    />
  )
}
