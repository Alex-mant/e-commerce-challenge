import Header from '../components/Header';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Details from '../components/Details';

const StyledApp = styled.div`
  // Your style here
`;


export function App() {
  return (
    <StyledApp>
      <Header/>
      <Carousel/>
      <Details/>
    </StyledApp>
  );
}

export default App;
