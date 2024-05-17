import { FC, useRef } from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import { Leva, useControls } from 'leva'
import { TorusKnot } from '../../components'

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

const Scene = () => {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null)

  const { lightColor, lightIntensity } = useControls({
    lightColor: 'white',
    lightIntensity: {
      value: 0.5,
      min: 0,
      max: 5,
      step: 0.2,
    },
  })

  useHelper(directionalLightRef as any, DirectionalLightHelper, 0.5, 'white')
  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={lightIntensity}
        ref={directionalLightRef}
        color={lightColor}
      />
      <ambientLight intensity={0.1} />

      {/* <group position={[0, -1, 0]}>
          <Cube position={[-4, -2, 0]} size={[3, 3, 1]} color="red" />

          <Cube position={[3, -2, 0]} size={[3, 3, 1]} color="orange" />
          <Cube position={[-4, 2, 0]} size={[3, 3, 1]} color="blue" />
          <Cube position={[2, 3, 0]} size={[3, 4, 1]} color="yellow" />
        </group> */}

      {/* <Cube position={[0, 0, 0]} size={[3, 3, 3]} color="blue" /> */}
      {/* <Sphere position={[1, 0, 1]} color={'orange'} args={[1, 60, 60]} /> */}
      {/* <Torus position={[2, 0, 0]} size={[2, 0.5, 40, 40]} color="blue" /> */}

      <TorusKnot
        position={[0, 0, 0]}
        color={'hotpink'}
        size={[0.1, 1000, 50]}
      />
      <OrbitControls enableZoom={false} />
    </>
  )
}

export const FiberPage: FC = () => {
  return (
    <>
      <Leva />
      <Container>
        <Canvas>
          <Scene />
        </Canvas>
      </Container>
    </>
  )
}

// mesh - represents polygon objects
