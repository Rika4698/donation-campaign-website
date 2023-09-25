import { Outlet } from "react-router-dom";

import Navbar from "../components/Header/Navber/Navber";


const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;