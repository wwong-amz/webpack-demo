
const getObjectType = require('./src/util/getObjectType');
const getDate = require('./src/util/dateUtility')

const getObject = () => {
  const objectType = getObjectType();
  const date = getDate();
  return {
    getObjectType: objectType,
    startDate: date,
    endDate: date + 100000
  }
}

console.log(getObject());