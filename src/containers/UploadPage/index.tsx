/* eslint-disable no-console */
import { useId, useState } from 'react'
import axios from 'axios'

const s3PresignedUrl = process.env.REACT_APP_PRESIGNED_URL

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const id = useId()

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
        url: s3PresignedUrl,
        headers: {
          // 'Content-Type': 'image/jpeg',
          'Content-Type': 'text/plain',
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
      <h1 id={id}>Upload File to S3</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  )
}

export { UploadPage }
