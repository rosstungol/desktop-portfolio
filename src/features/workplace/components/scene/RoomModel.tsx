import { useGLTF } from '@react-three/drei/core/Gltf'
import { type JSX, lazy, Suspense } from 'react'
import type { Mesh, MeshStandardMaterial } from 'three'
import type { GLTF } from 'three-stdlib'

import { ROOM_MODEL_SCALE } from '../../sceneConfig'

const Effects = lazy(() => import('./Effects'))

type GLTFResult = GLTF & {
	nodes: {
		Monoblock_Metal_0: Mesh
		Monoblock_White_0: Mesh
		Monoblock_Screen_0: Mesh
		Tourbox_controller_Black1_0: Mesh
		Soft_Paper_Lamp_Paper_Lamp_0: Mesh
		window_plane_Light_Outside_0: Mesh
		Poster_Photo_0: Mesh
		Curtain_L_Curtains_0: Mesh
	}
	materials: {
		PaletteMaterial001: MeshStandardMaterial
		PaletteMaterial002: MeshStandardMaterial
		Screen: MeshStandardMaterial
		PaletteMaterial003: MeshStandardMaterial
		PaletteMaterial004: MeshStandardMaterial
		PaletteMaterial005: MeshStandardMaterial
		Photo: MeshStandardMaterial
		PaletteMaterial006: MeshStandardMaterial
	}
}

export function RoomModel(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF(
		'/workplace/models/cozy-workplace-corner.glb'
	) as unknown as GLTFResult

	return (
		<group
			{...props}
			dispose={null}
			scale={[ROOM_MODEL_SCALE, ROOM_MODEL_SCALE, ROOM_MODEL_SCALE]}
		>
			<Suspense fallback={null}>
				<Effects />
			</Suspense>
			<mesh
				receiveShadow
				geometry={nodes.Monoblock_Metal_0.geometry}
				material={materials.PaletteMaterial001}
				position={[-1.077, 1.517, 0.021]}
				rotation={[-Math.PI / 2, 0, 0.07]}
				scale={0.631}
				userData={{ name: 'Monoblock_Metal_0' }}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Monoblock_White_0.geometry}
				material={materials.PaletteMaterial002}
				position={[-1.003, 1.639, 0.016]}
				rotation={[-Math.PI / 2, 0, 0.07]}
				scale={0.631}
				userData={{ name: 'Monoblock_White_0' }}
			/>
			<mesh
				castShadow
				geometry={nodes.Monoblock_Screen_0.geometry}
				material={materials.Screen}
				position={[-1.011, 1.639, 0.017]}
				rotation={[-Math.PI / 2, 0, 0.07]}
				scale={0.571}
				userData={{ name: 'Monoblock_Screen_0' }}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Tourbox_controller_Black1_0.geometry}
				material={materials.PaletteMaterial003}
				position={[-0.137, 1.174, 0.84]}
				rotation={[-Math.PI / 2, 0, 0.243]}
				scale={0.093}
				userData={{ name: 'Tourbox controller_Black1_0' }}
			/>
			<mesh
				castShadow
				geometry={nodes.Soft_Paper_Lamp_Paper_Lamp_0.geometry}
				position={[-0.899, 1.229, 1.077]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.194}
				userData={{ name: 'Soft Paper Lamp_Paper Lamp_0' }}
			>
				<meshStandardMaterial
					{...materials.PaletteMaterial004}
					emissive={0xff9b53}
					emissiveIntensity={2}
					toneMapped={false}
				/>
			</mesh>
			<mesh
				geometry={nodes.Poster_Photo_0.geometry}
				material={materials.Photo}
				position={[-0.368, 2.203, -1.295]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.32}
				userData={{ name: 'Poster_Photo_0' }}
			/>
			<mesh
				castShadow
				geometry={nodes.Curtain_L_Curtains_0.geometry}
				material={materials.PaletteMaterial006}
				position={[0.385, 1.744, -1.209]}
				rotation={[0, 0, -Math.PI / 2]}
				scale={[1.177, 0.85, 1.177]}
				userData={{ name: 'Curtain L_Curtains_0' }}
			/>
		</group>
	)
}
