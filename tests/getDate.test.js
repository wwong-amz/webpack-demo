const chai = require('chai')
const expect = chai.expect
const getDate = require('../getDate')

chai.should();
chai.config.showDiff = true;

describe('getDate', () => {
  it('checkTimeStamp', async () => {
    try {
      const getDateTimestamp = await getDate();
      const currentTimestamp = Date.now();
      expect(currentTimestamp).to.be.within(getDateTimestamp, getDateTimestamp + 10000)
    } catch (error) {
      throw error
    }
  }).timeout(10000)
})