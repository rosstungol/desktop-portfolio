export function Lighting() {
	return (
		<>
			<ambientLight color={'#eb95d6'} intensity={0.3} />
			<spotLight
				castShadow
				angle={1}
				color={'#eb95d6'}
				distance={200}
				intensity={80000}
				penumbra={1}
				position={[60, 162, 18]}
				shadow-bias={-0.0003}
				shadow-mapSize={[2048, 2048]}
			/>
		</>
	)
}
