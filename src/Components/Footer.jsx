import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-5 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Roomivio</h2>
            <p className="text-sm">Find your perfect roommate and place to live.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="space-y-1">
              <li><NavLink to={'/'} className="link link-hover">Home</NavLink></li>
              <li><NavLink to={'/browse'} className="link link-hover">Browse Listing</NavLink></li>
              <li><NavLink to={"/add-roommate"} className="link link-hover">Add to Find Roommate</NavLink></li>
              <li><NavLink to={"/my-listings"} className="link link-hover">My Listings</NavLink></li>
            </ul>
          </div>

          {/* Auth Links */}
          <div>
            <h3 className="footer-title">Account</h3>
            <ul className="space-y-1">
              <li><NavLink to={"/login"} className="link link-hover">Login</NavLink></li>
              <li><NavLink to={"/signup"} className="link link-hover">Signup</NavLink></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="footer-title">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <NavLink to={'/'} className="text-xl hover:text-blue-800"><i className="fab fa-facebook"></i></NavLink>
              <NavLink to={'/'} className="text-xl hover:text-blue-500"><i className="fab fa-twitter"></i></NavLink>
              <NavLink to={'/'} className="text-xl hover:text-orange-400"><i className="fab fa-instagram"></i></NavLink>
              <NavLink to={'/'} className="text-xl hover:text-blue-950"><i className="fab fa-linkedin"></i></NavLink>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="mt-10 border-t pt-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Roomivio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
