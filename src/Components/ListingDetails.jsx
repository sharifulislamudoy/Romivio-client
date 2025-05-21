import { Link, useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ListingDetails = () => {
    const lists = useLoaderData();
    const { id } = useParams();



     
    const [listing, setListing] = useState({});
    console.log(lists, id, listing)

    useEffect(() => {

        const listDetails = lists.find(singleDetails => singleDetails._id == id);
        setListing(listDetails)
        // fetch(`https://your-backend-api.com/api/listings/${id}`)
        //     .then((res) => res.json())
        //     .then((data) => setListing(data))
        //     .catch((err) => console.error("Failed to fetch listing:", err));
    }, [id, lists]);

    if (!listing) {
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
                <h2 className="text-3xl font-bold text-center mb-6">
                    📝 Roommate Listing Details
                </h2>

                <div className="space-y-4 text-sm sm:text-base grid grid-cols-1 md:grid-cols-2">
                    <p><strong>📧 User Email:</strong> {listing.userEmail}</p>
                    <p><strong>🙋‍♂️ User Name:</strong> {listing.userName}</p>
                    <p><strong>🧾 Title:</strong> {listing.title}</p>
                    <p><strong>📍 Location:</strong> {listing.location}</p>
                    <p><strong>💰 Rent Amount:</strong> ৳{listing.rent}</p>
                    <p><strong>🛏 Room Type:</strong> {listing.roomType}</p>
                    <p><strong>🧬 Lifestyle Preferences:</strong> {listing.preferences}</p>
                    <p><strong>📝 Description:</strong> {listing.description}</p>
                    <p><strong>📞 Contact Info:</strong> {listing.contactInfo}</p>
                    <p>
                        <strong>📆 Availability:</strong>{" "}
                        <span
                            className={`badge ${listing.availability === "available"
                                    ? "badge-success"
                                    : "badge-error"
                                }`}
                        >
                            {listing.availability}
                        </span>
                    </p>
                </div>
                <div className="text-center">
                    <Link className="btn btn-sm btn-primary mt-4" to={'/'}>Go to Home</Link>
                </div>
            </div>
        </motion.section>
    );
};

export default ListingDetails;
