const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCoins() {
  const response = await fetch(`${BASE_URL}/coins`);
  const json = await response.json();
  
  return json.splice(0,100);
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}