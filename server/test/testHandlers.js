const {assert} = require('chai');
const sinon = require('sinon');
const {serveJobs, serveJob} = require('../src/handlers');

describe('Handlers Unit Tests', () => {
  let request;
  const data = {
    url: 'http://testhost/job/test/',
    building: false,
    result: 'SUCCESS',
    timestamp: 1619856996200,
    fullDisplayName: 'Test Job #2',
  };
  beforeEach(() => {
    request = {
      params: {jobId: 0},
      app: {
        locals: {
          jobs: [
            {
              id: 0,
              job: 'http://testhost/job/test/',
              credentials: 'CREDENTIALS',
            },
          ],
          request: {get: () => new Promise(resolve => resolve({data}))},
        },
      },
    };
  });
  describe('serveJobs', () => {
    it('should get all jobs id and url without credentials', () => {
      const expected = [{id: 0, job: 'http://testhost/job/test/'}];
      const response = {
        json: data => assert.deepStrictEqual(data, expected),
      };
      serveJobs(request, response);
    });
  });

  describe('serveJob', () => {
    it('should give job with the status for given id', done => {
      const response = {
        json: actual => {
          assert.deepStrictEqual(actual, data);
          done();
        },
      };
      serveJob(request, response);
    });

    it('should give 404 not found for the given id not exists', () => {
      const response = {
        json: actual => {
          assert.deepStrictEqual(actual, {error: 'NOT FOUND'});
        },
      };
      request.params.jobId = 100;
      serveJob(request, response);
    });
  });
});
