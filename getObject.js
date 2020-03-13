
const getObjectType = require('./src/util/getObjectType');
const getDate = require('./src/util/dateUtility')

const getObject = () => {
  // const objectType = getObjectType();
  // const date = getDate();
  return {
    getObjectType: getObjectType(),
    startDate: getDate(),
    endDate: getDate() + 100000
  }
}

console.log(getObject());