import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {path:'/',element:<Home/>},
            {path:'/home',element:<Home/>},
            {path:"/cart", element:<Cart/>}
        ]
    }
])
export default router; 