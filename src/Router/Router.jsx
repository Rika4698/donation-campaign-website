import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import DonationSet from "../Pages/DonationSet/DonationSet";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";





const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/public/Data.json')
            },
            {
                path: '/donation',
                element:<Donation></Donation>

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>

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