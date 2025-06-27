import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-10 pb-5 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">Roomivio</h2>
            <p className="text-sm">Find your perfect roommate and place to live.</p>
          </div>
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="space-y-1">
              <li><Link to={'/'} className="link link-hover p-1">Home</Link></li>
              <li><Link to={'/browse'} className="link link-hover p-1">Browse Listing</Link></li>
              <li><Link to={"/add-roommate"} className="link link-hover p-1">Add to Find Roommate</Link></li>
              <li><Link to={"/my-listings"} className="link link-hover p-1">My Listings</Link></li>
              <li><Link to={"/about-us"} className="link link-hover p-1">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Account</h3>
            <ul className="space-y-1">
              <li><Link to={"/login"} className="link link-hover">Login</Link></li>
              <li><Link to={"/signup"} className="link link-hover">Signup</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Follow Us</h3>
            <div className="flex space-x-4 ..2">
              <Link to={'/'} className="text-xl hover:text-blue-800"><i className="fab fa-facebook"></i></Link>
              <Link to={'/'} className="text-xl hover:text-blue-500"><i className="fab fa-twitter"></i></Link>
              <Link to={'/'} className="text-xl hover:text-orange-400"><i className="fab fa-instagram"></i></Link>
              <Link to={'/'} className="text-xl hover:text-blue-950"><i className="fab fa-linkedin"></i></Link>
            </div>
          </div>
        </div>
        <div className="..10 border-t pt-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Roomivio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
