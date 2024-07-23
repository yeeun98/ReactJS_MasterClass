import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
  const { coinId } = useParams();
  const [data, setData] = useState('');

  return <h1>Coin</h1>;
}

export default Coin;