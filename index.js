// import getS3 from "./src/database/database";
// import getDate from "./src/util/dateUtility";

const getS3 = require('./src/database/database');
const getDate = require('./src/util/dateUtility');

const typeofSDK = async () => {
  const s3 = await getS3();
  console.log(s3)
  const date = getDate();; 
  console.log('typeof of s3 is: ' + typeof s3 + ' and the timesteamp for today is ' + date )
}

typeofSDK();