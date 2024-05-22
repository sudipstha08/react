import { useEffect, useState } from 'react'

export const TestingStateChange = () => {
  const [toggleTextVisible, setToggleTextVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          setBtnDisabled(!btnDisabled)
        }}
      >
        Toggle button disabled
      </button>

      {toggleTextVisible && <p> Text visible </p>}

      <button
        onClick={() => {
          setToggleTextVisible(!toggleTextVisible)
        }}
      >
        Toggle text
      </button>
      {loaded && <h3> Page Loaded </h3>}
    </div>
  )
}
