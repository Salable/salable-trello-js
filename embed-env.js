const fs = require('fs')
const path = require('path')

function swapEnvInFile(env, filePath) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err)
    }

    // Your blocks of text
    const originalText = env
    const replacementText = process.env[env]

    // Replace the content
    const result = data.replace(new RegExp(originalText, 'g'), replacementText)

    // Write the file back
    fs.writeFile(path, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}

function processFile(filePath) {
  // Your processing logic here
  console.log('Processing:', filePath)
  const envs = ['TRELLO_API_KEY', 'SALABLE_API_KEY', 'SALABLE_PRODUCT_UUID']
  for (const env in envs) swapEnvInFile(env, filePath)
}

function walkDirectory(directory, callback) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err)
      return
    }

    files.forEach((file) => {
      const fullPath = path.join(directory, file)
      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err)
          return
        }
        if (stats.isDirectory() && file === 'js') {
          walkDirectory(fullPath, callback)
        } else if (stats.isFile() && fullPath.endsWith('.html')) {
          callback(fullPath)
        } else if (directory.endsWith('/js') || directory.endsWith('\\js')) {
          callback(fullPath)
        }
      })
    })
  })
}

// Process .html files in the current directory and all files in 'js' subfolder
walkDirectory('.', processFile)
