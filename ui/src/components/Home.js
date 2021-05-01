import styled from 'styled-components';
import Builds from './Builds';

const Home = ({className}) => (
  <div className={className}>
    <h1>Jenkins Build Monitor</h1>
    <Builds />
  </div>
);

const StyledHome = styled(Home)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledHome;
