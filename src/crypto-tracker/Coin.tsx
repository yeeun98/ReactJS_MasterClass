import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container, Header, Title, Main, Loader } from './Coins';

interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams();
  const [data, setData] = useState('');
  const location = useLocation();
  const state = location.state as RouteState;

  return <Container>
    <Header>
      <Title>{state.name}</Title>
    </Header>

    <Main>
      <Loader>Loader...</Loader>
    </Main>
  </Container>;
}

export default Coin;