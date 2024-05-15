import React from 'react'
import ReactDOM from 'react-dom'

const PortalComponent = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>THis is a portal component</h1>
    </div>,
    document.getElementById('portal') as HTMLElement,
  )
}

export { PortalComponent }
