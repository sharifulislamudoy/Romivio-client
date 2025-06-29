import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, AuthContext, provider } from "../Provider/AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";

const formVariant = {
    hidden: { opacity: 0, y: 2 },
    visible: {
        opacity: 1,
        y: 20,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const SignupForm = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const { createUser, setUser, updateUser } = useContext(AuthContext);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { name, contact, photo, email, password, ...restFormData } = Object.fromEntries(formData.entries());

        try {
            const result = await createUser(email, password);
            const user = result.user;
            await updateUser({
                displayName: name,
                photoURL: photo,
            });
            setUser({ ...user, phoneNumber: contact, displayName: name, photoURL: photo });

            const userProfile = {
                name,
                email,
                photo,
                contact,
                ...restFormData,
            };

            const response = await fetch('https://roomivio-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(userProfile),
            });

            const data = await response.json();

            if (data.insertedId) {
                Swal.fire({
                    title: "Account Created Successfully",
                    icon: "success",
                    timer: 3000,
                });
                navigate('/add-roommate');
                form.reset();
            }

        } catch (error) {
            console.error("Sign-up error:", error);
            Swal.fire({
                title: "Sign-up Failed",
                text: error.message,
                icon: "error",
            });
        }
    };
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            navigate('/add-roommate')
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
                animate="visible"
                viewport={{ once: false, amount: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-6">📝 Create Your Account</h2>

                <form onSubmit={handleSignUp} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" name="name" className="input input-bordered w-full" placeholder="Your full name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" name="email" className="input input-bordered w-full" placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block text-sm font-medium mb-1">Photo URL</label>
                        <input type="url" name="photo" className="input input-bordered w-full" placeholder="https://example.com/photo.jpg" required />
                    </div>
                    <div className="..4">
                        <label htmlFor="contact" className="block text-sm font-medium mb-1">Contact Number</label>
                        <input type="tel" name="contact" className="input input-bordered w-full" placeholder="e.g. 01712345678" pattern="[0-9]{11}" required />
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
                        <ul className="text-xs ..1 text-gray-500 list-disc list-inside">
                            <li>Must contain at least 1 uppercase letter</li>
                            <li>Must contain at least 1 lowercase letter</li>
                            <li>Minimum 6 characters</li>
                        </ul>
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium mb-1">I am</label>
                        <select name="role" className="select select-bordered w-full" required>
                            <option value="">Select your role</option>
                            <option value="seeker">Looking for a Room</option>
                            <option value="owner">Offering a Room</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium mb-1">Preferred Location</label>
                        <input type="text" name="location" className="input input-bordered w-full" placeholder="e.g. Mirpur, Banani, Dhanmondi" />
                    </div>
                    <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget Range (BDT)</label>
                        <input type="text" name="budget" className="input input-bordered w-full" placeholder="e.g. 5000 - 10000" />
                    </div>
                    <div>
                        <label htmlFor="genderPref" className="block text-sm font-medium mb-1">Preferred Roommate Gender</label>
                        <select name="genderPref" className="select select-bordered w-full">
                            <option value="">No preference</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="any">Any</option>
                        </select>
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

                <p className="..6 text-center text-sm">
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
