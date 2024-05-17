import { FC } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Sphere, TorusKnot } from '../../components'

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  background-color: black;
  * {
    width: 50%;
    height: 50%;
  }
`

const FiberPage: FC = () => {
  return (
    <Container>
      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <ambientLight intensity={0.1} />

        {/* <group position={[0, -1, 0]}>
          <Cube position={[-4, -2, 0]} size={[3, 3, 1]} color="red" />

          <Cube position={[3, -2, 0]} size={[3, 3, 1]} color="orange" />
          <Cube position={[-4, 2, 0]} size={[3, 3, 1]} color="blue" />
          <Cube position={[2, 3, 0]} size={[3, 4, 1]} color="yellow" />
        </group> */}

        {/* <Cube position={[0, 0, 0]} size={[3, 3, 3]} color="blue" /> */}
        <Sphere position={[1, 0, 1]} color={'orange'} args={[1, 60, 60]} />
        {/* <Torus position={[6, 0, 0]} size={[2, 0.5, 40, 40]} color="blue" /> */}

        <TorusKnot
          position={[-2, 0, 0]}
          color={'hotpink'}
          size={[1, 0.2, 1000, 100]}
        />
      </Canvas>
    </Container>
  )
}

export { FiberPage }

// mesh - represents polygon objects
