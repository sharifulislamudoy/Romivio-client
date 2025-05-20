import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const formVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LoginForm = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-base-100 text-base-content">
      <motion.div
        className="max-w-md mx-auto bg-base-200 p-8 rounded-2xl shadow-lg"
        variants={formVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">🔐 Login to Roomivio</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="label cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              Remember me
            </label>
            <NavLink to="#" className="link link-hover text-primary">
              Forgot password?
            </NavLink>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="link link-primary">
            Sign up
          </NavLink>
        </p>
      </motion.div>
    </section>
  );
};

export default LoginForm;
