import '@fortawesome/fontawesome-free/css/all.min.css';

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
              <li><a href="/" className="link link-hover">Home</a></li>
              <li><a href="/browse" className="link link-hover">Browse Listing</a></li>
              <li><a href="/add-roommate" className="link link-hover">Add to Find Roommate</a></li>
              <li><a href="/my-listings" className="link link-hover">My Listings</a></li>
            </ul>
          </div>

          {/* Auth Links */}
          <div>
            <h3 className="footer-title">Account</h3>
            <ul className="space-y-1">
              <li><a href="/login" className="link link-hover">Login</a></li>
              <li><a href="/signup" className="link link-hover">Signup</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="footer-title">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-xl hover:text-primary"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-xl hover:text-primary"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl hover:text-primary"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl hover:text-primary"><i className="fab fa-linkedin"></i></a>
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
