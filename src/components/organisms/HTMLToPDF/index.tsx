import React from 'react'
import jsPDF from 'jspdf'

const HTMLToPDF = () => {
  const pdfRef = React.createRef<HTMLDivElement>()

  const downloadPDF = () => {
    const input = pdfRef.current
    if (!input) return

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      precision: 100,
      compress: false,
    })

    pdf
      .html(pdfRef.current as any, {
        callback: function (doc) {
          doc.save()
        },
        x: 1,
        y: 1,
        width: 210,
        windowWidth: 210,
        margin: 5,
        // filename: 'Report.pdf',
      })
      .save('report.pdf')
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h1>Download PDF using JS PDF</h1>
      <div ref={pdfRef}>
        {/* Your HTML content here */}
        <div>
          <h2 style={{ color: 'red' }}>Hello, World!</h2>
          <p style={{ fontSize: '5px', lineHeight: 0 }}>
            This is a test PDF generated from HTML content.
          </p>
          <p style={{ fontSize: '5px', lineHeight: 0 }}>
            This is a test PDF generated from HTML content.
          </p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
          <p>This is a test PDF generated from HTML content.</p>
        </div>
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  )
}

export { HTMLToPDF }
