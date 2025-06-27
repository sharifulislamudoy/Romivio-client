import logoImg from '../assets/logo.jpg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../Components/Header.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    const isScrolled = false;

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire("Logged Out Succesfully");
            })
            .catch((error) => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }

            })
    navigate('/login')
    }


    return (
        <div className="w-full sticky backdrop-blur-md shadow-md top-0 bg-white">
            <div className="w-11/12 mx-auto px-4 flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 ..3 w-52 p-2 shadow">
                            <li><NavLink className="text-md " to={"/"}>Home</NavLink></li>
                            <li><NavLink className="text-md " to={"/browse"}>Browse Listing</NavLink></li>
                            <li><NavLink className="text-md " to={"/add-roommate"}>Add to Find Roommate</NavLink></li>
                            <li><NavLink className="text-md " to={"/my-listings"}>My Listings</NavLink></li>
                            <li><NavLink className="text-md " to={"/about-us"}>About Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={logoImg} className='h-8 w-auto hidden lg:flex' alt="" />
                        <p className='lg:text-3xl text-xl font-bold text-primary'>Roomivio</p>
                    </div>
                </div>
                <div className='navbar'>
                    <ul className="menu menu-horizontal px-1 space-x-2 hidden lg:flex">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/browse"}>Browse Listing</NavLink></li>
                        <li><NavLink to={"/add-roommate"}>Add to Find Roommate</NavLink></li>
                        <li><NavLink to={"/my-listings"}>My Listings</NavLink></li>
                        <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                    </ul>
                </div>
                <div className=" items-center space-x-2">
                    {!user ? (
                        <div className='flex gap-3'>
                            <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                            <Link to="/signup" className="btn text-white btn-primary btn-sm">Signup</Link>
                        </div>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content ..3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                                <li><span className="text-sm font-semibold">{user.name}</span></li>
                                <li><button onClick={handleLogOut}><NavLink to="/login">Log out</NavLink></button></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>



        </div>
    );
};

export default Header;
