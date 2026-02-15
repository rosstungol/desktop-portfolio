export default function Lighting() {
	return (
		<spotLight
			castShadow
			angle={1}
			color={'#eb95d6'}
			distance={200}
			intensity={15000}
			penumbra={1}
			position={[40, 100, 6]}
			shadow-bias={-0.0003}
			shadow-mapSize={[2048, 2048]}
		/>
	)
}
