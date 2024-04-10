/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'

const s3PresignedUrl =
  'https://burnside-health-uploads-raw.s3.us-west-2.amazonaws.com/3afeb0b2-20b3-4e81-b974-7307c37595f4/session321/test.jpg?AWSAccessKeyId=AKIAX3PPC2G6CJSJWQD3&Content-Type=image%2Fjpeg&Expires=1712823025&Signature=FXGOh3rpw5riZ7WWPgSSKydXcEQ%3D'

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>(null)

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected')
      return
    }
    const endDate = new Date()
    endDate.setMinutes(endDate.getMinutes() + 10)

    try {
      const config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'https://burnside-health-uploads-raw.s3.us-west-2.amazonaws.com/3afeb0b2-20b3-4e81-b974-7307c37595f4/session321/o22.jpg?AWSAccessKeyId=AKIAX3PPC2G6CJSJWQD3&Content-Type=image%2Fjpeg&Expires=1712823758&Signature=Vd7i3u3P1JQPpaqT7Z0sEMe39ME%3D',
        headers: {
          'Content-Type': 'image/jpeg',
        },
        data: selectedFile,
      }

      axios
        .request(config)
        .then(response => {
          console.log(JSON.stringify(response.data))
        })
        .catch(error => {
          console.log(error)
        })
      // eslint-disable-next-line no-console
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div>
      <h1>Upload File to S3</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  )
}

export { UploadPage }
