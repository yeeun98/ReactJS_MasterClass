import styled from 'styled-components';

const Container = styled.div`
  background-color: ${prop => prop.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${prop => prop.theme.txtColor};
`;

function App() {

  return (
    <Container>
      <H1>protected</H1>
    </Container>
  );
}

export default App;