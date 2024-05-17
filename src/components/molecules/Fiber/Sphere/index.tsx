import { Color, Vector3, useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import * as THREE from 'three'

export const Sphere: FC<{ position: Vector3; args: any; color: Color }> = ({
  position,
  args,
  color,
}) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    // delta is a time diff between current frame and last frame
    if (!ref.current) return
    // console.log(delta)
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 1
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
