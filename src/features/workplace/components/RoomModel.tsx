import { useGLTF } from '@react-three/drei'
import { Bloom, EffectComposer, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import type { JSX } from 'react'
import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Monoblock_Metal_0: THREE.Mesh
    Monoblock_White_0: THREE.Mesh
    Monoblock_Screen_0: THREE.Mesh
    Tourbox_controller_Black1_0: THREE.Mesh
    Soft_Paper_Lamp_Paper_Lamp_0: THREE.Mesh
    window_plane_Light_Outside_0: THREE.Mesh
    Poster_Photo_0: THREE.Mesh
    Curtain_L_Curtains_0: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshStandardMaterial
    PaletteMaterial004: THREE.MeshStandardMaterial
    PaletteMaterial005: THREE.MeshStandardMaterial
    Photo: THREE.MeshStandardMaterial
    PaletteMaterial006: THREE.MeshStandardMaterial
  }
}

export default function RoomModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/cozy_workplace_corner-transformed.glb'
  ) as unknown as GLTFResult

  return (
    <group {...props} dispose={null} scale={[16, 16, 16]}>
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.5}
        />
        <Noise opacity={0.03} blendFunction={BlendFunction.VIVID_LIGHT} />
      </EffectComposer>
      <mesh
        castShadow
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
        receiveShadow
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
        receiveShadow
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
        castShadow
        receiveShadow
        geometry={nodes.Poster_Photo_0.geometry}
        material={materials.Photo}
        position={[-0.368, 2.203, -1.295]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.32}
        userData={{ name: 'Poster_Photo_0' }}
      />
      <mesh
        castShadow
        receiveShadow
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

useGLTF.preload('/models/cozy_workplace_corner-transformed.glb')
