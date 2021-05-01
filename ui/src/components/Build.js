import {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  background-color: ${({building, result}) =>
    building
      ? 'rgb(255, 251, 115, 1)'
      : result === 'SUCCESS'
      ? 'rgba(40, 167, 69, 1)'
      : 'rgba(255, 5, 55, 1)'};
  display: flex;
  height: 7em;
  width: 21em;
  padding: 0 10px;
  font-size: 18px;
  text-decoration: none;
  color: black;
  border-radius: 4px;
  border: 1px solid;
  align-items: center;
  margin: 10px;
  & > p {
    width: 100%;
    text-align: center;
  }
  &:hover {
    box-shadow: 3px 2px 12px 5px #e3e3e4;
    background-color: ${({building, result}) =>
      building
        ? 'rgb(255, 251, 115, 0.9)'
        : result === 'SUCCESS'
        ? 'rgba(40, 167, 69, 0.9)'
        : 'rgba(255, 5, 55, 0.9)'};
  }
`;

const Build = ({data: {id, job}, className}) => {
  const [build, setBuild] = useState(null);

  const requestBuildStatus = () => {
    fetch(`/api/job/${id}`)
      .then(data => data.json())
      .then(data => setBuild(() => data));
  };

  useEffect(() => {
    requestBuildStatus();
    const interval = setInterval(requestBuildStatus, 3000);
    return () => clearInterval(interval);
  }, []);

  return build ? (
    <StyledAnchor href={job} building={build.building} result={build.result}>
      <p>{build.fullDisplayName}</p>
    </StyledAnchor>
  ) : (
    'Loading...'
  );
};

export default Build;
