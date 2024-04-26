import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ArtCraft from "../Pages/ArtCraft";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";

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
        element: <MyCraft />
      }
    ],
  },
]);

export default router;
