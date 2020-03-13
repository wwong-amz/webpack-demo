// import getS3 from "./src/database/database";
// import getDate from "./src/util/dateUtility";

const getS3 = require('./src/database/database');

const typeofSDK = async () => {
  const s3 = await getS3();
  console.log('typeof of s3 is: ' + typeof s3)
}

typeofSDK();