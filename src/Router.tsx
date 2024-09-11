import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Coin from "./crypto-tracker/Coin";
import Price from "./crypto-tracker/Price";
import Chart from "./crypto-tracker/Chart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:coinId',
    element: <Coin />,
    children:[
      {
        path: 'price',
        element: <Price />
      },
      {
        path: 'chart',
        element: <Chart />
      },
    ]
  },
]);

export default router;