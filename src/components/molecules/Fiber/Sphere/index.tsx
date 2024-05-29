import { FC, useRef, useState } from 'react'
import { Color, Vector3, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Sphere: FC<{ position: Vector3; args: any; color: Color }> = ({
  position,
  args,
  color,
}) => {
  const ref = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  /**
   * Animations
   */
  useFrame((_, delta) => {
    // delta is a time diff between current frame and last frame
    if (!ref.current) return
    // ref.current.rotation.x += delta
    const speed = isHovered ? 1 : 0.2
    ref.current.rotation.y += delta * speed
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
  })

  return (
    <mesh
      position={position}
      ref={ref}
      // eslint-disable-next-line no-sequences
      onPointerEnter={e => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(prev => !prev)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={args} />
      <meshStandardMaterial color={isHovered ? 'lightblue' : color} wireframe />
    </mesh>
  )
}
