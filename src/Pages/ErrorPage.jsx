import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error404Animation from "../assets/Lottie.json"; // 👈 Import your Lottie JSON file

const errorVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-100 px-4 text-base-content">
      <motion.div
        className="text-center max-w-md bg-base-200 p-10 rounded-2xl shadow-xl"
        variants={errorVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Lottie Animation */}
        <div className="w-64 h-64 mx-auto mb-4">
          <Lottie animationData={error404Animation} loop={true} />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-sm text-gray-500 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </motion.div>
    </section>
  );
};

export default ErrorPage;
