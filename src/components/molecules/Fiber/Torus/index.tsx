import { Color, Vector3 } from '@react-three/fiber'
import { FC } from 'react'

export const Torus: FC<{ position: Vector3; size: any; color: Color }> = ({
  position,
  size,
  color,
}) => {
  return (
    <mesh position={position}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
