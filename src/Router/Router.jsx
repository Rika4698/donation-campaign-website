import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DonationSet from "../Pages/DonationSet/DonationSet";



const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/Data.json')
            },
            {
                path:'/cards/:id',
                element:<DonationSet></DonationSet>,
                loader:()=>fetch('/public/Data.json')
                
            }


        ]
    }


])

export default myCreatedRoute;