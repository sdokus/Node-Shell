const fs = require('fs')

function cat (fileName) {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err){
      throw err
    } else {
      process.stdout.write(data)
      process.stdout.write('\nprompt > ')
    }
  })
}

module.exports = {cat}
