import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";

const UpdateRoommateForm = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const data = useLoaderData();
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!user || !data) {
        return <LoadingSpinner />;
    }

    const { _id, title, location, rent, roomType, lifestyle, description, contact, availability } = data || {};

    const handleUpdateListing = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateData = Object.fromEntries(formData.entries());

        if (!_id) {
            console.error("Listing ID is missing");
            return;
        }

        // Check if any field has changed
        const isChanged = Object.keys(updateData).some(key => {
            return updateData[key]?.trim() !== String(data[key])?.trim();
        });

        if (!isChanged) {
            Swal.fire("No changes detected!", "Please update at least one field before submitting.", "info");
            return;
        }

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                setIsSubmitting(true);
                fetch(`https://roomivio-server.vercel.app/listings/${_id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updateData)
                })
                    .then(res => res.json())
                    .then(data => {
                        setIsSubmitting(false);
                        if (data.modifiedCount) {
                            Swal.fire("Saved!", "", "success");
                            navigate("/my-listings");
                        } else {
                            Swal.fire("No changes were made.", "", "info");
                        }
                    })
                    .catch(error => {
                        setIsSubmitting(false);
                        console.error("Error updating listing:", error);
                        Swal.fire("Error!", "Something went wrong while updating.", "error");
                    });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    return (
        <section className="py-16 px-4 bg-base-100 text-base-content">
            <motion.div
                className="max-w-4xl mx-auto bg-base-200 p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 10 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">🔄 Update Roommate Listing</h2>

                <form onSubmit={handleUpdateListing} className="grid gap-6">
                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        <div>
                            <label className="block font-medium mb-1">Your Name</label>
                            <input
                                type="text"
                                value={user.displayName}
                                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Your Email</label>
                            <input
                                type="email"
                                value={user.email}
                                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                                readOnly
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Title</label>
                        <input
                            defaultValue={title}
                            type="text"
                            name="title"
                            placeholder="e.g., Looking for a roommate in Mirpur"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Location</label>
                            <input
                                defaultValue={location}
                                placeholder="e.g. Mirpur, Banani, Dhanmondi"
                                type="text"
                                name="location"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Rent Amount (BDT)</label>
                            <input
                                defaultValue={rent}
                                type="number"
                                name="rent"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Room Type</label>
                            <select
                                defaultValue={roomType}
                                name="roomType"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select Type</option>
                                <option value="Single">Single</option>
                                <option value="Shared">Shared</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Lifestyle Preferences</label>
                            <input
                                defaultValue={lifestyle}
                                type="text"
                                name="lifestyle"
                                placeholder="e.g., No Smoking, Night Owl"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Description</label>
                        <textarea
                            defaultValue={description}
                            name="description"
                            rows="4"
                            className="textarea textarea-bordered w-full"
                            required
                        ></textarea>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Contact Info</label>
                            <input
                                defaultValue={contact}
                                type="text"
                                name="contact"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Availability</label>
                            <select
                                defaultValue={availability}
                                name="availability"
                                className="select select-bordered w-full"
                            >
                                <option value="available">Available</option>
                                <option value="not_available">Not Available</option>
                            </select>
                        </div>
                    </div>

                    <input
                        type="submit"
                        value={isSubmitting ? "Updating..." : "Update Listing"}
                        disabled={isSubmitting}
                        className="mt-5 text-center btn btn-primary w-full sm:w-auto"
                    />
                </form>
            </motion.div>
        </section>
    );
};

export default UpdateRoommateForm;
