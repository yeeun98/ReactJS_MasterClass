import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Coin from "./crypto-tracker/Coin";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/:coinId',
    element: <Coin />,
  },
]);

export default router;