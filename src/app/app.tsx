import Header from '../components/Header';
import styled from 'styled-components';
import Carousel from '../components/Carousel';

const StyledApp = styled.div`
  // Your style here
`;


export function App() {
  return (
    <StyledApp>
      <Header/>
      <Carousel/>
    </StyledApp>
  );
}

export default App;
