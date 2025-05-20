import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const isScrolled = false;
    const isLoggedIn = false;

    const user = {
        displayName: "John Doe",
        photoURL: "https://i.pravatar.cc/150?img=3",
    };

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-2xl shadow-md' : 'bg-base-100'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className='flex items-center'>
                    <img src={logoImg} alt="roomivio" className='h-10' />
                    <NavLink to={'/'} className="text-xl font-bold text-primary ml-2">Roomivio</NavLink>
                </div>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button tabIndex={0} role="button" onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links - Desktop */}
                <ul className="menu menu-horizontal px-1 space-x-2 hidden md:flex">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/browse"}>Browse Listing</NavLink></li>
                    <li><NavLink to={"/add-roommate"}>Add to Find Roommate</NavLink></li>
                    <li><NavLink to={"/my-listings"}>My Listings</NavLink></li>
                </ul>

                {/* Auth Buttons or User Info */}
                <div className="hidden md:flex items-center space-x-2">
                    {!isLoggedIn ? (
                        <>
                            <NavLink to="/login" className="btn btn-outline btn-sm">Login</NavLink>
                            <NavLink to="/signup" className="btn btn-primary btn-sm">Signup</NavLink>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                                <li><span className="text-sm font-semibold">{user.displayName}</span></li>
                                <li><NavLink to="/logout">Log out</NavLink></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="relative lg:hidden">

                {menuOpen && (
                    <div className="absolute right-0 mt-5 w-48 bg-base-100 shadow-lg rounded-md z-50 transition-all duration-300 origin-top scale-y-100">
                        <ul className="py-2">
                            <li>
                                <NavLink
                                    to={'/'}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2 hover:bg-base-200"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/browse'}
                                   
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2 hover:bg-base-200"
                                >
                                    Browse Listing
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="/add-roommate"
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2 hover:bg-base-200"
                                >
                                    Add to Find Roommate
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/my-listings"
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-2 hover:bg-base-200"
                                >
                                    My Listings
                                </a>
                            </li>

                            {!isLoggedIn ? (
                                <>
                                    <li>
                                        <a
                                            href="/login"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2 hover:bg-base-200"
                                        >
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/signup"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2 hover:bg-base-200"
                                        >
                                            Signup
                                        </a>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <span className="block px-4 py-2 text-sm text-gray-500">
                                            {user.displayName}
                                        </span>
                                    </li>
                                    <li>
                                        <a
                                            href="/logout"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2 hover:bg-base-200"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            </div>


        </div>
    );
};

export default Header;





// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const Navbar = ({ user, logOut }) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate('/');
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   };

//   return (
//     <div
//       className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-transparent backdrop-blur-md shadow-md' : 'bg-base-100'
//       }`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold text-primary">Roomivio</Link>

//         {/* Nav Links */}
//         <ul className="menu menu-horizontal px-1 space-x-2 hidden md:flex">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/browse">Browse Listing</Link></li>
//           {user && <li><Link to="/add-roommate">Add to Find Roommate</Link></li>}
//           {user && <li><Link to="/my-listings">My Listings</Link></li>}
//         </ul>

//         {/* Auth Buttons */}
//         <div className="flex items-center space-x-2">
//           {!user ? (
//             <>
//               <button onClick={() => navigate('/login')} className="btn btn-outline btn-sm">Login</button>
//               <button onClick={() => navigate('/signup')} className="btn btn-primary btn-sm">Signup</button>
//             </>
//           ) : (
//             <div className="dropdown dropdown-end">
//               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                 <div className="w-10 rounded-full">
//                   <img src={user.photoURL || '/default-avatar.png'} alt="User avatar" />
//                 </div>
//               </label>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
//               >
//                 <li><span className="text-sm font-semibold">{user.displayName}</span></li>
//                 <li><button onClick={handleLogout}>Log out</button></li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
