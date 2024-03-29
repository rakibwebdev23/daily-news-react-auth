import { Link } from "react-router-dom";
import userImage from "../../assets/images/user.png";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";

const Navbar = () => {

    const { user, userSignOut } = useContext(UserContext);

    const navbar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/register">Register</Link></li>
    </>

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                console.log("User logout successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">


                {
                    user ?
                        <>

                            <img className="w-9" src={userImage} alt="" />
                            <button onClick={handleSignOut} className="px-8 py-1 bg-gray-900 text-white">Sign Out</button></> :
                        <>
                            <img className="w-9" src={userImage} alt="" />
                            <Link to="/login"><button className="px-8 py-1 bg-gray-900 text-white">Login</button></Link>
                        </>

                }
            </div>
        </div>
    );
};

export default Navbar;