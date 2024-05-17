import { FC, useRef } from 'react'
import { Color, Vector3, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const TorusKnot: FC<{ position: Vector3; size: any; color: Color }> = ({
  position,
  size,
  color,
}) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    // delta is a time diff between current frame and last frame
    if (!ref.current) return
    // console.log(delta)
    ref.current.rotation.x += delta
    ref.current.rotation.y += delta * 3
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
