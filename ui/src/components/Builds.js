import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Build from './Build';

const Builds = ({className}) => {
  const [builds, setBuilds] = useState(null);

  useEffect(() => {
    fetch('/api/jobs')
      .then(data => data.json())
      .then(data => setBuilds(() => data));
  }, []);

  return (
    <div className={className}>
      {builds
        ? builds.map(build => <Build data={build} key={build.id} />)
        : 'Loading...'}
    </div>
  );
};

const StyledBuilds = styled(Builds)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default StyledBuilds;
