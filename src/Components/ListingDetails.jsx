import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const ListingDetails = () => {
    const listing = useLoaderData(); // Now directly using the single listing object
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikeCount(prev => prev + 1);
            setLiked(true);
        }
    };

    if (!listing || !listing._id) {
        return (
            <div className="flex justify-center items-center h-[70vh] text-xl font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <motion.section
            className="py-16 px-4 bg-base-100 text-base-content mt-25 min-h-screen"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-2">
                    📝 Roommate Listing Details
                </h2>
                <p className="text-center text-lg font-semibold mb-6 text-primary">
                    {likeCount} {likeCount === 1 ? "person" : "people"} interested in
                </p>

                <div className="space-y-4 text-sm sm:text-base grid grid-cols-1 md:grid-cols-2">
                    <p><strong>📧 User Email:</strong> {listing.userEmail}</p>
                    <p><strong>🙋‍♂️ User Name:</strong> {listing.userName}</p>
                    <p><strong>🧾 Title:</strong> {listing.title}</p>
                    <p><strong>📍 Location:</strong> {listing.location}</p>
                    <p><strong>💰 Rent Amount:</strong> ৳{listing.rent}</p>
                    <p><strong>🛏 Room Type:</strong> {listing.roomType}</p>
                    <p><strong>🧬 Lifestyle Preferences:</strong> {listing.preferences}</p>
                    <p><strong>📝 Description:</strong> {listing.description}</p>
                    <p>
                        <strong>📆 Availability:</strong>{" "}
                        <span className={`badge ${listing.availability === "available"
                            ? "badge-success"
                            : "badge-error"
                            }`}>
                            {listing.availability}
                        </span>
                    </p>
                </div>

                <div className="mt-6 flex justify-center items-center flex-col gap-4 ">
                    <button
                        onClick={handleLike}
                        className={`btn btn-outline btn-primary ${liked ? 'btn-disabled' : ''}`}
                    >
                        ❤️ {liked ? "Liked" : "Like"}
                    </button>

                    {liked && (
                        <p className="mt-4 text-base text-success">
                            📞 Contact Info: {listing.contactInfo}
                        </p>
                    )}

                    <Link className="btn btn-sm btn-secondary" to={"/"}>
                        Go to Home
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default ListingDetails;
