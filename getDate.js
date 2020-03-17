const dateUtility = require('./src/util/dateUtility.js')

const getDate = () => {
  const timestamp = dateUtility();
  return timestamp
}

console.log(getDate());

module.exports = getDate;