import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Main Layout/MainLayout";
import Home from "../Pages/Home";
import Statictics from "../Pages/Statictics";
import Dashboard from "../Pages/Dashboard";
import UpComing from "../Pages/UpComing";
import Cards from "../Components/Cards/Cards";
import Details from "../Pages/Details";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage> ,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader:()=> fetch('../../public/category.json'),
          children:[
            {
              path:'/',
              element: <Cards></Cards> ,
              loader:()=> fetch('../../public/gadgets.json')
            },
            {
              path:'/cards/:cards',
              element: <Cards></Cards> ,
              loader:()=> fetch('../../public/gadgets.json')
            },
          ]
        },
       
        {
          path:'/statistics',
          element: <Statictics></Statictics>,
        },
        {
          path:'/dashbord',
          element: <Dashboard></Dashboard>,
        },
        {
          path:'/upcoming',
          element: <UpComing></UpComing>,
        },
        {
          path:'/details',
          element: <Details></Details>,
        },
      ]
    },
  ])
export default routes;