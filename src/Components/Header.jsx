import logoImg from '../assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import '../Components/Header.css'

const Header = () => {
    const isScrolled = false;
    const isLoggedIn = false;

    const user = {
        displayName: "John Doe",
        photoURL: "https://i.pravatar.cc/150?img=3",
    };


    return (
        <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent backdrop-blur-2xl shadow-md' : 'bg-base-100'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className="text-lg font-semibold" to={"/"}>Home</NavLink></li>
                            <li><NavLink className="text-lg font-semibold" to={"/browse"}>Browse Listing</NavLink></li>
                            <li><NavLink className="text-lg font-semibold" to={"/add-roommate"}>Add to Find Roommate</NavLink></li>
                            <li><NavLink className="text-lg font-semibold" to={"/my-listings"}>My Listings</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={logoImg} className='h-8' alt="" />
                        <p className='text-3xl font-bold text-primary'>Roomivio</p>
                    </div>
                </div>




                {/* Nav Links - Desktop */}
                <div className='navbar'>
                    <ul className="menu menu-horizontal px-1 space-x-2 hidden lg:flex">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/browse"}>Browse Listing</NavLink></li>
                        <li><NavLink to={"/add-roommate"}>Add to Find Roommate</NavLink></li>
                        <li><NavLink to={"/my-listings"}>My Listings</NavLink></li>
                    </ul>
                </div>

                {/* Auth Buttons or User Info */}
                <div className=" items-center space-x-2">
                    {!isLoggedIn ? (
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
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                                <li><span className="text-sm font-semibold">{user.displayName}</span></li>
                                <li><NavLink to="/logout">Log out</NavLink></li>
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
