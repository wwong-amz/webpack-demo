const AWS = require('aws-sdk');

const s3 = new AWS.S3({ apiversion: '2006-03-01' });

const getS3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(s3)
    }, 5000)
  })
}

// export default getS3;
module.exports = getS3;