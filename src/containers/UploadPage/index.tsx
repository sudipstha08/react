/* eslint-disable no-console */
import { useState } from 'react'
import axios from 'axios'

const s3PresignedUrl =
  'https://burnside-health-uploads-raw.s3.us-west-2.amazonaws.com/er_fsd/testSession2/test1?AWSAccessKeyId=AKIAX3PPC2G6CJSJWQD3&Expires=1717281823&Signature=aQzoGFfKUau1ofdhQBWHgF4SRlI%3D'

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
      const metadata = {
        // Add metadata key-value pairs here
        startDate: new Date().toISOString(),
        endDate: endDate.toISOString(),
      }

      const response = await axios.put(s3PresignedUrl, selectedFile, {
        headers: {
          ...metadata, // Merge metadata headers with Content-Type
        },
      })

      // eslint-disable-next-line no-console
      console.log('response', response)
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
