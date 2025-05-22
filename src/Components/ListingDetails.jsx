import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const ListingDetails = () => {

    const { user } = useContext(AuthContext)
    const listing = useLoaderData();
    const [likeCount, setLikeCount] = useState(listing.likeCount || 0);
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {

        if (!liked) {
            try {
                const res = await fetch(`http://localhost:3000/listings/${listing._id}/like`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                });
                if (!res.ok) {
                    throw new Error("Failed to update like count");
                }
                const updated = await res.json();
                setLikeCount(updated.likeCount);
                setLiked(true);
            } catch (err) {
                console.error("Like update failed:", err);
            }
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
                    <p><strong>📧 User Email:</strong> {user.email}</p>
                    <p><strong>🙋‍♂️ User Name:</strong> {user.displayName}</p>
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
                        className="btn btn-outline btn-primary"
                        disabled={liked}
                    >
                        ❤️ {liked ? "Liked" : "Like"}
                    </button>

                    {liked && (
                        <p className="mt-4 text-base text-success">
                            📞 Contact Info: {listing.contact || "No phone number available"}
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
