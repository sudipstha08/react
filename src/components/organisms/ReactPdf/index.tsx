import {
  PDFDownloadLink,
  Document,
  Page,
  View,
  Text,
} from '@react-pdf/renderer'

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
  return (
    <div>
      <h1>Download PDF</h1>
      <PDFDownloadLink document={<MyPDFComponent />} fileName="mypdf.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

export { ReactPDF }
