import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ArtCraft from "../Pages/ArtCraft";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/art-craft",
        element: <ArtCraft />,
      },

      {
        path: '/add-craft',
        element: <AddCraft />
      },

      {
        path: '/my-craft',
        element: <PrivateRoute> <MyCraft /> </PrivateRoute>,
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/signin',
        element: <Signin />
      }
    ],
  },
]);

export default router;
