import { FC } from 'react'
import ReactDOM from 'react-dom'

export const PortalComponent: FC = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>THis is a portal component</h1>
    </div>,
    document.getElementById('portal') as HTMLElement,
  )
}
