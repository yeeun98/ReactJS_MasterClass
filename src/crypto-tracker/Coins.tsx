import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "./api";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

//#region style-component
export const Container = styled.div`
  padding: 0 20px 20px 20px;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  background-color: ${props => props.theme.bgColor};
  box-sizing: border-box;
`;
export const Header = styled.header`
  padding-top: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  max-width: 480px;
  margin-left: -20px;
  background-color: ${props => props.theme.bgColor};
`;
export const Main = styled.main`
  padding-top: 80px;
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
  color: ${props => props.theme.textColor};
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
//#endregion

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
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDartAtom = () => setIsDark(current => !current);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ['allCoins'],
    queryFn: fetchCoins
  });

  return <Container>
    <Header>
      <Title>코인</Title>
      <button type="button" onClick={toggleDartAtom}>Toggle Mode</button>
    </Header>
    
    <Main>
        {
          isLoading ? (<Loader>로드중...</Loader>) : (
            <CoinsList>
              { data?.map((coin: CoinInterface) => (
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