import { useNavigate } from 'react-router-dom'

export function NavItem({ label, path, dataTest }) {
  const navigate = useNavigate()
  return (
    <div data-test={dataTest} onClick={() => navigate(path)}>
      {label}
    </div>
  )
}
