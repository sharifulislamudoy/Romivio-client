import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../Provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { NavLink } from "react-router-dom";

const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const SignupForm = () => {

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User Info:", user);
        } catch (error) {
            console.error("Google Sign-In Error", error.message);
        }
    };


    return (
        <section className="min-h-screen py-20 px-4 bg-base-100 text-base-content">
            <motion.div
                className="max-w-lg mx-auto bg-base-200 p-8 rounded-2xl shadow-lg"
                variants={formVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">📝 Create Your Account</h2>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered w-full"
                            placeholder="Your full name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
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
                        <label htmlFor="photo" className="block text-sm font-medium mb-1">
                            Photo URL
                        </label>
                        <input
                            type="url"
                            id="photo"
                            className="input input-bordered w-full"
                            placeholder="https://example.com/photo.jpg"
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
                        <ul className="text-xs mt-1 text-gray-500 list-disc list-inside">
                            <li>Must contain at least 1 uppercase letter</li>
                            <li>Must contain at least 1 lowercase letter</li>
                            <li>Minimum 6 characters</li>
                        </ul>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Sign Up
                    </button>
                </form>

                <div className="divider my-6">or</div>

                <button className="btn btn-outline w-full flex items-center justify-center gap-2" onClick={handleGoogleSignIn}>
                    <FcGoogle className="text-xl" />
                    Sign Up with Google
                </button>

                <p className="mt-6 text-center text-sm">
                    Already have an account?{" "}
                    <NavLink to="/login" className="link link-primary">
                        Login here
                    </NavLink>
                </p>
            </motion.div>
        </section>
    );
};

export default SignupForm;
