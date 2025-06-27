import { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';
import '../Components/Header.css';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const [userListings, setUserListings] = useState([]);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire("Logged Out Successfully");
                navigate('/login');
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };

    useEffect(() => {
        if (user?.email) {
            fetch("https://roomivio-server.vercel.app/listings")
                .then(res => res.json())
                .then(data => {
                    const filtered = data.filter(item => item.email === user.email);
                    setUserListings(filtered);
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                });
        }
    }, [user?.email]);

    return (
        <div className="drawer drawer-end z-50">
            <input id="user-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full sticky backdrop-blur-md shadow-md top-0 bg-white z-50">
                <div className="w-11/12 mx-auto px-4 flex justify-between items-center">
                    <div className="navbar-start">
                        {/* Mobile Menu */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                                <li><NavLink to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"/browse"}>Browse Listing</NavLink></li>
                                <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                                <li><NavLink to={"/support"}>Support</NavLink></li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={logoImg} className='h-8 w-auto hidden lg:flex' alt="Logo" />
                            <p className='lg:text-3xl text-xl font-bold text-primary'>Roomivio</p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className='navbar'>
                        <ul className="menu menu-horizontal px-1 space-x-2 hidden lg:flex">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/browse"}>Browse Listing</NavLink></li>
                            <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                            <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                            <li><NavLink to={"/support"}>Support</NavLink></li>
                        </ul>
                    </div>

                    <div className="items-center space-x-2">
                        {!user ? (
                            <div className='flex gap-3'>
                                <Link to="/login" className="btn btn-outline btn-sm">Login</Link>
                                <Link to="/signup" className="btn text-white btn-primary btn-sm">Signup</Link>
                            </div>
                        ) : (
                            <label htmlFor="user-drawer" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom cursor-pointer" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </label>
                        )}
                    </div>
                </div>
            </div>

            {/* Drawer */}
            <div className="drawer-side z-[999]">
                <label htmlFor="user-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <li><span className="text-lg font-semibold">{user?.displayName}</span></li>
                    <li><span className="text-md font-semibold">{user?.email}</span></li>
                    <li><span className="text-md font-semibold">Total Listings: {userListings.length}</span></li>
                    <li><NavLink to="/add-roommate">Add to Find Roommate</NavLink></li>
                    <li><NavLink to="/my-listings">My Listings</NavLink></li>
                    <li><button onClick={handleLogOut} className="btn btn-outline btn-sm mt-2">Logout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
