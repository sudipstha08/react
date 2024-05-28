/* eslint-disable no-console */
import { useState, useRef, useEffect } from 'react'

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(' mountingh')
    setCount(count + 1)
    return () => {
      console.log('unmounting==>')
    }
  }, [])

  if (isPlaying) {
    console.time('filter array')
    ref.current && ref.current.play() // Calling these while rendering isn't allowed.
    console.timeEnd('filter array')
  } else {
    ref.current && ref.current.pause() // Also, this crashes.
  }

  return <video ref={ref} src={src} loop playsInline />
}

export function TestPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )
}
