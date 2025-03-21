const fs = require('fs')
const path = require('path')

const directoryPath = './src' // Change this to your project folder if not "src"

// Function to process files recursively
function processFiles(dir) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const fullPath = path.join(dir, file)
    const stats = fs.statSync(fullPath)

    if (stats.isDirectory()) {
      processFiles(fullPath) // Recursive call for directories
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      removeTsNoCheck(fullPath)
    }
  })
}

// Function to remove lines containing @ts-nocheck
function removeTsNoCheck(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const updatedContent = fileContent
    .split('\n')
    .filter(line => !line.includes('@ts-nocheck'))
    .join('\n')

  if (fileContent !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8')
    console.log(`Updated file: ${filePath}`)
  }
}

// Start processing
processFiles(directoryPath)
console.log('Finished removing @ts-nocheck lines!')
