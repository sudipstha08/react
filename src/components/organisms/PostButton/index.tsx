/* eslint-disable no-console */
import { Button } from '@mui/material'

export function PostButton({ className }) {
  function handleClick() {
    fetch('http://localhost:3000/examples', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        // eslint-disable-next-line no-console
        console.log({ data })
      })
      .catch(() => {
        console.log('An error occured')
      })
  }

  return (
    <Button onClick={handleClick} className={className} data-test="post-button">
      Post Data
    </Button>
  )
}
