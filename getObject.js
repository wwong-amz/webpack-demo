const fs = require('fs');
const getS3Content = require('./src/database/database')



const getObject = async () => {
  const data = await getS3Content();
  fs.writeFile('SampleImage.png', data.Body, (err) => {
    if (err) {
      throw err
    } else {
      console.log('Image has been saved')
    }
  })
}

getObject();