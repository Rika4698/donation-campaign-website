import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <nav>
                <div className="navbar bg-base-100 mt-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#796de9] font-bold underline" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>

                                </li>
                                <li>
                                    <NavLink
                                        to="/donation"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#6c4ac9] font-bold underline" : ""
                                        }
                                    >
                                        Donation
                                    </NavLink>


                                </li>
                                <li>
                                    <NavLink
                                        to="/statistics"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#4672cf] font-bold underline" : ""
                                        }
                                    >
                                        Statistics
                                    </NavLink>


                                </li>
                            </ul>
                        </div>
                        <img className="w-48 ml-16" src="https://i.ibb.co/wwWFQZp/Logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden md:flex   lg:flex navbar-end mx-16">
                        <ul className="flex gap-8 text-lg font-normal">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>


                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>


                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;