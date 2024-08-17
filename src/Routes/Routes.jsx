import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import RequestSubmit from "../Pages/RequestSubmit/RequestSubmit";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/request-submit",
        element: <RequestSubmit />,
      },
    ],
  },
]);
export default routes;
