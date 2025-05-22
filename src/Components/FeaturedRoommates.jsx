import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdEventAvailable } from "react-icons/md";

const FeaturedPosts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/listings?limit=8")
            .then((res) => res.json())
            .then((data) => {
                const availablePosts = data
                    .filter((post) => post.availability === "available")
                setPosts(availablePosts);
            })
            .catch((err) => console.error("Error fetching featured posts:", err));
    }, []);



    return (
        <motion.section
            className="py-16 px-4 bg-base-100 text-base-content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    🌟 Featured Roommates Posts
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <motion.div
                            key={post._id}
                            className="card bg-base-200 shadow-md p-6 flex flex-col justify-between"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">
                                    📍 Location: {post.location}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    💰 Rent: ৳{post.rent}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    🛏 Room Type: {post.roomType}
                                </p>
                                <p className="text-sm text-gray-600 mb-1 truncate">
                                    📖 {post.description}
                                </p>
                                <p className="text-sm text-gray-600 mb-1 truncate flex items-center gap-2">
                                    <MdEventAvailable /> {post.availability}
                                </p>
                            </div>
                            <button
                                onClick={() => navigate(`/listings/${post._id}`)}
                                className="mt-4 btn btn-primary btn-sm"
                            >
                                See More
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default FeaturedPosts;
