import { useEffect, useState } from 'react';
import { Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Container, Header, Title, Main, Loader } from './Coins';
import styled from 'styled-components';
import Chart from './Chart';
import Price from './Price';

/**
 * coin id로 코인 받기 (Coins)
  https://api.coinpaprika.com/v1/coins/btc-bitcoin
  https://api.coinpaprika.com/#operation/getCoinById
 *
 * coin id로 특정 코인에 대한 시세 정보 얻기 (Tickers)
  https://api.coinpaprika.com/v1/tickers/btc-bitcoin
  https://api.coinpaprika.com/#operation/getTickersById
 *
 **/

  //#region interface
  interface RouteState {
    name: string;
  }
  
  
  interface ITag {
    id: string;
    name: string;
    coin_counter: number;
    ico_counter: number;
  }
  interface IInfoData {
    name: string;
    id: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
    logo: string;
    tags: ITag[];
    team: object;
    description: string;
    message: string;
    open_source: boolean;
    started_at: string;
    development_status: string;
    hardware_wallet: boolean;
    proof_type: string;
    org_structure: string;
    hash_algorithm: string;
    links: object;
    links_extended: object;
    whitepaper: object;
    first_data_at: string;
    last_data_at: string;
  }
  
  interface IPriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h:number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      }
    };
  }
  //#endregion

//#region StyleComponent
const RowList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #415a77;
  border-radius: 12px;
  padding: 18px; 25px;
  box-sizing: border-box;
`;

const RowItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h3 {
    font-size: 12px;
  }
  span {
    font-size: 19px;
  }
`;

const Description = styled.p`
  color: #fff;
  margin: 24px 0;
`;
//#endregion

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const location = useLocation();
  const state = location.state as RouteState;
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

  useEffect(()=>{
    (async() => {
      const infoData = await(
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await(
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, [])

  return <Container>
    <Header>
      <Title>{state?.name}</Title>
    </Header>

    <Main>
      {
        loading ? <Loader>Loader...</Loader> : (
          <>
            <RowList>
              <RowItem>
                <h3>RANK :</h3>
                <span>{ info?.rank }</span>
              </RowItem>
              <RowItem>
                <h3>SYMBOL :</h3>
                <span>{ info?.symbol }</span>
              </RowItem>
              <RowItem>
                <h3>OPEN SOURCE :</h3>
                <span>Yes</span>
              </RowItem>
            </RowList>

            <Description>
              { info?.description }
            </Description>

            <RowList>
              <RowItem>
                <h3>TOTAL SUPLY :</h3>
                <span>{ priceInfo?.total_supply }</span>
              </RowItem>
              <RowItem>
                <h3>MAX SUPPLY :</h3>
                <span>{ priceInfo?.max_supply }</span>
              </RowItem>
            </RowList>

            
            <Outlet />
          </>
        )
      }
    </Main>
  </Container>;
}

export default Coin;