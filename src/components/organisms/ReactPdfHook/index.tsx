import { usePDF, Document, Page, Text } from '@react-pdf/renderer'

const MyDoc = (
  <Document>
    <Page>
      <Text render={() => <div>Helloooo div using hook </div>} />
    </Page>
  </Document>
)

export const ReactPdfHook = () => {
  const [instance, error] = usePDF({ document: MyDoc })

  if (instance.loading) return <div>Loading ...</div>

  if (instance.error) return <div>Something went wrong: {error as any}</div>

  return (
    <a href={instance.url!} download="test.pdf">
      Download using hook
    </a>
  )
}
