import { FC, useRef } from 'react'
import { Color, Vector3 } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshWobbleMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export const TorusKnot: FC<{ position: Vector3; size: any; color: Color }> = ({
  position,
  size,
  // color,
}) => {
  const ref = useRef<THREE.Mesh>(null)

  const { color, radius } = useControls({
    color: 'lightBlue',
    radius: {
      value: 1,
      min: 1,
      max: 5,
      step: 0.2,
    },
  })

  // useFrame((state, delta) => {
  //   // delta is a time diff between current frame and last frame
  //   if (!ref.current) return
  //   // (delta)
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta * 3
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  // })
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...size] as any} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial color={color} factor={3} speed={2} />
    </mesh>
  )
}
