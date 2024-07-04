import { createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

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
        element: <About />
      },
    ],
    errorElement: <NotFound />
  },
]);

export default router;