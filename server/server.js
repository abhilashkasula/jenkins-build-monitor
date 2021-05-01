const express = require('express');
const axios = require('axios');
const logger = require('morgan');
const handlers = require('./src/handlers');
const jobs = require('./jobs.json');

const PORT = process.env.PORT || 5000;

const app = express();
app.locals.jobs = jobs.map((job, id) => ({...job, id}));
app.locals.request = axios;

app.use(logger('dev'));
app.get('/api/jobs', handlers.serveJobs);
app.get('/api/job/:jobId', handlers.serveJob);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
