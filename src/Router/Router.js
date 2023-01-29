import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Deshboard";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import AddProduct from "../Pages/Dashboard/AddProduct";
import ProductList from "../Pages/Dashboard/ProductList";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {path:'/',element:<Home/>},
            {path:'/home',element:<Home/>},
            {path:"/cart", element:<Cart/>},

        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <ProductList />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },

])
export default router; 