const chai = require('chai')
const expect = chai.expect
// const describe = require('mocha').describe;
const getDate = require('../getDate')
const mocha = require('mocha')

chai.should();
chai.config.showDiff = true;

mocha.describe('getDate', () => {
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