import React from 'react';
import logoImg from '../assets/logo.jpg'

const Header = () => {
    const isScrolled = false;

    // Toggle this manually to simulate authentication state
    const isLoggedIn = false;

    // Simulated user object
    const user = {
        displayName: "John Doe",
        photoURL: "https://i.pravatar.cc/150?img=3",
    };
    return (
        <div
            className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-2xl shadow-md' : 'bg-base-100'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className='flex items-center'>
                    <img src={logoImg} alt="roomivio" className='h-10' />
                    <a href="/" className="text-xl font-bold text-primary">Roomivio</a>
                </div>

                {/* Nav Links */}
                <ul className="menu menu-horizontal px-1 space-x-2 hidden md:flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/browse">Browse Listing</a></li>
                    <li><a href="/add-roommate">Add to Find Roommate</a></li>
                    <li><a href="/my-listings">My Listings</a></li>
                </ul>

                {/* Auth Buttons or User Info */}
                <div className="flex items-center space-x-2">
                    {!isLoggedIn ? (
                        <>
                            <a href="/login" className="btn btn-outline btn-sm">Login</a>
                            <a href="/signup" className="btn btn-primary btn-sm">Signup</a>
                        </>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
                            >
                                <li><span className="text-sm font-semibold">{user.displayName}</span></li>
                                <li><a href="/logout">Log out</a></li>
                            </ul>
                        </div>
                    )}
                </div>
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
