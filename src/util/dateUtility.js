

const dateUtility = () => {
  try {
    return Date.now();
  } catch (error) {
    throw error
  }
}

// export default dateUtility;
module.exports = dateUtility;