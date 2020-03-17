const fs = require('fs');
const AWS = require('aws-sdk');
const credentials = new AWS.SharedIniFileCredentials({ profile: 'proto-developer-account' });
AWS.config.credentials = credentials;
const s3 = new AWS.S3({ apiversion: '2006-03-01' });

const getS3Content = () => {
  const params = {
    Bucket: 'rmpq-fa68a46d-e75e-4188-826f-1d240c757cbf',
    Key: '9947999D-5B46-43CE-ACF4-85043878692B/B9E7285F-2E99-4EAD-A8DF-C0464DB0DECD/SampleImage.png'
  }
  try {
  //  s3.getObject(params, (err, data) => {
  //     if (err) {
  //       console.log(err, err.stack)
  //     } else {
        // fs.writeFile('SampleImage.png', data.Body, (err) => {
        //   if (err) {
        //     throw err
        //   } else {
        //     console.log('Image has been saved')
        //   }
        // })
  //     }
  //   })
    return new Promise((resolve, reject) => {
      s3.getObject(params, (err, data) => {
        if (err) {
          console.log(err, err.stack)
        } else {
          resolve(data)
        }
      })
    })
  } catch (error) {
    throw error
  }
}

module.exports = getS3Content;