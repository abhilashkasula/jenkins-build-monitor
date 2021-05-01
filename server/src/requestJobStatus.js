const requestJobStatus = (request, job, creds) => {
  const api = `${job}lastBuild/api/json`;
  const config = {headers: {Authorization: `Basic ${creds}`}};
  return request
    .get(api, config)
    .then(({data: {url, building, result, timestamp, fullDisplayName}}) => ({
      url,
      building,
      result,
      timestamp,
      fullDisplayName,
    }));
};

module.exports = {requestJobStatus};
