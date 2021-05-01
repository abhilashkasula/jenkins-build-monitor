const assert = require('assert');
const {requestJobStatus} = require('../src/requestJobStatus');

describe('requestJobsStatus', () => {
  it('should get Job details', done => {
    const data = {
      url: 'http://testurl/job/test/',
      building: false,
      result: 'SUCCESS',
      timestamp: 1619856996200,
      fullDisplayName: 'Test Job #2',
    };
    const request = {get: () => new Promise(resolve => resolve({data}))};
    requestJobStatus(request, 'http://testurl/job/test/', 'CREDENTIALS').then(
      requestedData => {
        assert.deepStrictEqual(requestedData, data);
        done();
      }
    );
  });
});
