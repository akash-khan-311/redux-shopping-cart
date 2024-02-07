import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Cart from "../Page/Cart";
import Root from "../Layout/Root";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export default Routes;
