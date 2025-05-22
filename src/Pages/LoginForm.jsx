import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const formVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LoginForm = () => {
  const location = useLocation();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            title: "Login Successful!",
            icon: "success",
            draggable: true,
            timer:2000,
          })
        }
        navigate(`${location.state? location.state : "/"}`)
      })
      .catch((error) => {
        if (error) {
          toast.error("Password Wrong")
        }
      })

    navigate('/my-listings')
  }
  return (
    <section className="min-h-screen py-20 px-4 bg-base-100 text-base-content">
      <motion.div
        className="max-w-md mx-auto bg-base-200 p-8 rounded-2xl shadow-lg"
        variants={formVariant}
        initial="hidden"
        animate="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">🔐 Login to Roomivio</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input input-bordered w-full pr-10"
              placeholder="••••••••"
              pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
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
