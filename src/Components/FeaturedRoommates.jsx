import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedPosts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 600, once: false });

        fetch("https://roomivio-server.vercel.app/listings?limit=8")
            .then((res) => res.json())
            .then((data) => {
                const availablePosts = data.filter((post) => post.availability === "available");
                setPosts(availablePosts);
            })
            .catch((err) => console.error("Error fetching featured posts:", err));
    }, []);

    return (
        <section className="py-16 px-4 bg-base-100 text-base-content" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    🌟 Featured Roommates Posts
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post._id}
                            className="bg-base-200 shadow-md p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
                            data-aos="zoom-in-up"
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
                                className="btn btn-primary btn-sm mt-4"
                            >
                                See More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
