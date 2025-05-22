import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <motion.section
      className="mt-6 py-16 px-6 bg-primary text-primary-content text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Find Your Perfect Roommate Today</h2>
        <p className="mb-6 text-lg opacity-90">
          Roomivio makes finding and posting shared rooms fast, safe, and easy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/add-roommate" className="btn btn-accent btn-lg shadow-md">
            🚀 Post a Listing
          </Link>
          <Link to="/browse" className="btn btn-outline btn-lg text-white border-white">
            🔍 Browse Listings
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;
