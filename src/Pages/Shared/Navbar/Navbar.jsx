import { Link, NavLink } from "react-router-dom";
import profile from '../../../assets/assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {

    // sign out
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



    const links = [
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/career'>Career</NavLink></li>
        </>
    ]
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Who</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full mr-2">
                        <img src={profile} alt="" />
                    </div>
                </label>

                {/* login work */}
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-outline font-semibold border-1 border-b-4 px-5">SignOut</button>
                        :
                        <Link to='/login' className="btn btn-outline font-semibold border-1 border-b-4 px-5">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;