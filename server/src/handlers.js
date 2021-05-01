const {requestJobStatus} = require('./requestJobStatus');

const serveJobs = (req, res) => {
  const jobs = req.app.locals.jobs;
  const required = jobs.map(({id, job}) => ({id, job}));
  res.json(required);
};

const serveJob = (req, res) => {
  const {jobs, request} = req.app.locals;
  const jobId = +req.params.jobId;
  const {job, credentials} = jobs.find(({id}) => id === +jobId) || {};
  if (!job) {
    res.statusCode = 404;
    return res.json({error: 'NOT FOUND'});
  }
  requestJobStatus(request, job, credentials).then(status => res.json(status));
};

module.exports = {serveJobs, serveJob};
