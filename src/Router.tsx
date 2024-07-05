import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
        /** component 내에 error 발생 시 보이는 element  */
        errorElement: <ErrorComponent />
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'followers',
            element: <Followers />
          }
        ]
      },
      {
        path: 'user/:userId',
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />
          }
        ]
      },
    ],
    errorElement: <NotFound />
  },
]);

export default router;