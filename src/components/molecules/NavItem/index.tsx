import { useNavigate } from 'react-router-dom'

export function NavItem({ label, path }) {
  const navigate = useNavigate()
  return <div onClick={() => navigate(path)}>{label}</div>
}
