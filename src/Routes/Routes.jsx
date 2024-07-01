import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ArtCraft from "../Pages/ArtCraft";
import Home from "../Pages/Home";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import CraftDetails from "../Pages/CraftDetails";
import Update from "../Pages/Update";
// import Subcategory from "../Components/Subcategory/Subcategory";
import AddSubcategory from "../Components/Subcategory/AddSubcategory";
import CraftDesign from "../Components/CraftDesign/CraftDesign";
import Contact from "../Components/Contact/Contact";
import CategoryDetails from "../Pages/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/art-craft",
        element: <ArtCraft />,
        loader: () => fetch('https://art-craft-tau.vercel.app/getsCraft')
      },

      {
        path: '/add-craft',
        element: <PrivateRoute> <AddCraft /> </PrivateRoute>
      },
      {
        path: '/craft-details/:id',
        element: <PrivateRoute> <CraftDetails /> </PrivateRoute>,
        loader: ({params}) => fetch(`https://art-craft-tau.vercel.app/${params.id}`)
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
      },
      {
        path: '/update/:id',
        element: <Update />,
        loader: ({params}) => fetch(`https://art-craft-tau.vercel.app/${params.id}`)
      },
      {
        path: '/addSubcategory',
        element: <AddSubcategory />,
      },
      {
        path: '/craftDesign',
        element: <CraftDesign />
      },
      {
        path: '/categoryDetails/:id',
        element: <CategoryDetails />
      },
      {
        path: '/contact',
        element: <Contact />,
        loader: () => fetch('https://art-craft-tau.vercel.app/getsCraft')
      }
    ],
  },
]);

export default router;
