/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from '@react-pdf/renderer'
import { Profiler } from 'react'

const MyPDFComponent = () => {
  return (
    <Document>
      <Page size="A4" style={{}}>
        <View style={{}}>
          <Text render={() => <div>Helloooo div with view </div>} />
        </View>
      </Page>
    </Document>
  )
}

const ReactPDF = () => {
  function onRender(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  ) {
    // Aggregate or log render timings...
    console.log('id', id)
    console.log('phase', phase)
    console.log('actualDuration', actualDuration)
    console.log('baseDuration', baseDuration)
    console.log('startTime', startTime)
    console.log('commitTime', commitTime)
  }
  return (
    <Profiler id="reactpdf" onRender={onRender}>
      <div>
        <h1>Download PDF</h1>
        <PDFDownloadLink document={<MyPDFComponent />} fileName="mypdf.pdf">
          {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
    </Profiler>
  )
}

export { ReactPDF }
