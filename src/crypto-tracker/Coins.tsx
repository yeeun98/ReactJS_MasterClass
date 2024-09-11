import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px 20px 20px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: #1F2937;
  box-sizing: border-box;
`;
export const Header = styled.header`
  padding-top: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  max-width: 480px;
  margin-left: -20px;
  background-color: #1F2937;
`;
export const Main = styled.main`
  padding-top: 70px;
  min-height: 100vh;
`;
const CoinsList = styled.ul`
`;
const Coin = styled.li`
  margin-top: 15px;
  background-color: #fff;
  padding: 12px 15px;
  border-radius: 10px;
  color: #18181a;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  color: #3B82F6;
  font-size: 35px;
  font-weight: 700;
  width: 100%; 
`;
export const Loader = styled.div`
  text-align: center;
  display: block;
  color: #fff;
`;
const Img = styled.img`
  width: 25px; 
  height: 25px; 
`;

//#region interface
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
//#endregion

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    (async() => {
      setLoading(true);
      const response = await fetch('https://api.coinpaprika.com/v1/coins');
      const json = await response.json();
      setCoins(json.splice(0,100));
      setLoading(false);
    })();
  }, [])

  return <Container>
    <Header>
      <Title>코인</Title>
    </Header>
    <Main>
        {
          loading ? (<Loader>로드중...</Loader>) : (
            <CoinsList>
              { coins.map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`} state={{name: coin.name}}>
                    <Img src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`} />
                    {coin.name}
                  </Link>
                </Coin>
              )) }
            </CoinsList>
          )
        }
    </Main>
  </Container>
}
export default Coins;