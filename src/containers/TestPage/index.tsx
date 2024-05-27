/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import { useRef, useState } from 'react'
import { CatList } from '../../components'

export function TestPage() {
  let countRef = useRef(2)
  let myRef = useRef(null)
  const [isClick, setIsClicked] = useState(false)

  countRef.current = 10

  console.log("rerendering", myRef.current)

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }

  return (
    <>
    <div ref={myRef}>Hello</div>
      <button onClick={handleClick}>
        You clicked {countRef.current} times
      </button>
      <button onClick={() => setIsClicked(!isClick)}>
        You clicked {isClick.toString()}
      </button>

      <CatList />
    </>
  )
}
