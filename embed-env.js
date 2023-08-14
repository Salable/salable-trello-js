const fs = require('fs')
const path = require('path')

function swapEnvInFile(envs, filePath) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    let result = data
    for (envIter in envs) {
      const env = envs[envIter]
      console.log(env)
      if (err) {
        return console.log(err)
      }
      // Your blocks of text
      const originalText = env
      const replacementText = process.env[env] ? process.env[env] : ''

      console.log(
        'replacing ' +
          originalText +
          ' with ' +
          replacementText +
          ' in ' +
          filePath,
      )

      // Replace the content
      result = result.replace(new RegExp(originalText, 'g'), replacementText)
    }
    console.log(result)
    // Write the file back
    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) return console.log(err)
    })
  })
}

function processFile(filePath) {
  // Your processing logic here
  console.log('Processing:', filePath)
  const envs = ['TRELLO_API_KEY', 'SALABLE_API_KEY', 'SALABLE_PRODUCT_UUID']
  swapEnvInFile(envs, filePath)
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
        } else if (fullPath.endsWith('.json')) {
          callback(fullPath)
        }
      })
    })
  })
}

// Process .html files in the current directory and all files in 'js' subfolder
walkDirectory('.', processFile)
walkDirectory('./js', processFile)
