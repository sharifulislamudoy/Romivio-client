import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.4 },
    },
};

const FeaturedRoommates = () => {
    const [featuredRoommates, setFeaturedRoommates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRoommates = async () => {
            try {
                const res = await fetch("/api/roommates/featured");
                if (!res.ok) {
                    throw new Error("Failed to fetch featured roommates");
                }
                const data = await res.json();
                setFeaturedRoommates(data);
            } catch (error) {
                console.error("Failed to load roommates", error);
                setError("Could not load featured roommates. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchRoommates();
    }, []);

    return (
        <section className="py-16 px-4 bg-base-100 text-base-content">
            <div className="w-11/12 mx-auto">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    ✨ Featured Roommate Posts
                </motion.h2>

                {loading && (
                    <p className="text-center text-lg font-medium text-gray-500">
                        Loading...
                    </p>
                )}

                {error && (
                    <p className="text-center text-red-500 font-medium mb-8">{error}</p>
                )}

                {!loading && !error && (
                    <motion.div
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {featuredRoommates.map((roommate) => (
                            <motion.div
                                key={roommate._id}
                                className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
                                variants={cardVariants}
                            >
                                <figure>
                                    <img
                                        src={roommate.img}
                                        alt={roommate.name || "Roommate image"}
                                        className="w-full h-56 object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="text-xl font-semibold">{roommate.name}</h3>
                                    <p className="text-sm text-gray-500">{roommate.location}</p>
                                    <p className="mt-2">{roommate.bio}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <NavLink
                                            to={`/roommates/${roommate._id}`}
                                            className="btn btn-primary btn-sm"
                                        >
                                            View Profile
                                        </NavLink>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default FeaturedRoommates;
