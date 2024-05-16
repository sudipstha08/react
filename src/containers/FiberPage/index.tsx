import { FC } from 'react'
import { Canvas, Color, Vector3 } from '@react-three/fiber'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 100px;
`

const Cube: FC<{ position: Vector3; size: any; color: Color }> = ({
  position,
  size,
  color,
}) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const FiberPage: FC = () => {
  return (
    <Container>
      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <ambientLight intensity={0.1} />

        <group position={[0, -1, 0]}>
          <Cube position={[-4, -2, 0]} size={[3, 3, 1]} color="red" />

          <Cube position={[3, -2, 0]} size={[3, 3, 1]} color="orange" />
          <Cube position={[-4, 2, 0]} size={[3, 3, 1]} color="blue" />
          <Cube position={[2, 3, 0]} size={[3, 4, 1]} color="yellow" />
        </group>
      </Canvas>
    </Container>
  )
}

export { FiberPage }

// mesh - represents polygon objects
