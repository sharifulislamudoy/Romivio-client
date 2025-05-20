import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const FeaturedRoommates = () => {
    const [featuredRoommates, setFeaturedRoommates] = useState([]);

    useEffect(() => {
        const fetchRoommates = async () => {
            try {
                const res = await fetch("/api/roommates/featured");
                const data = await res.json();
                setFeaturedRoommates(data);
            } catch (error) {
                console.error("Failed to load roommates", error);
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
                                    alt={roommate.name}
                                    className="w-full h-56 object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <h3 className="text-xl font-semibold">{roommate.name}</h3>
                                <p className="text-sm text-gray-500">{roommate.location}</p>
                                <p className="mt-2">{roommate.bio}</p>
                                <div className="card-actions justify-end mt-4">
                                    <a href={`/roommates/${roommate._id}`} className="btn btn-primary btn-sm">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedRoommates;
