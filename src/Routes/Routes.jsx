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
          loader:()=> fetch('/category.json'),
          children:[
            {
              path:'/',
              element: <Cards></Cards> ,
              loader:()=> fetch('/gadgets.json')
            },
            {
              path:'/cards/:cards',
              element: <Cards></Cards> ,
              loader:()=> fetch('/gadgets.json')
            },
         
          ]
        },
       
        {
          path:'/statistics',
          element: <Statictics></Statictics>,
          loader:()=> fetch('/gadgets.json'),
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
          loader:()=> fetch('/gadgets.json')
        },
      ]
    },
  ])
export default routes;