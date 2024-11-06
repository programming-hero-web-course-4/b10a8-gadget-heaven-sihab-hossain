import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import MainLayout from "../Main Layout/MainLayout";
import Home from "../Pages/Home";
import Statictics from "../Pages/Statictics";
import Dashboard from "../Pages/Dashboard";
import UpComing from "../Pages/UpComing";
import Cards from "../Components/Cards/Cards";
import Details from "../Pages/Details";
import Cart from "../Pages/Cart";
import Wish from "../Pages/Wish";
// import Wish from "../Pages/Wish";

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
          children:[
            {
              path:'/dashbord',
              element:<Cart></Cart>
            },
            {
              path:"/dashbord/wish",
              element:<Wish></Wish>
            }
          ]  
        },
        {
          path:'/upcoming',
          element: <UpComing></UpComing>,
        },
        {
          path:'/card/:product_id',
          element: <Details></Details>,
          loader:()=> fetch('../../public/gadgets.json')
        },
      ]
    },
  ])
export default routes;