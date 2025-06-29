import { motion } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddRoommateForm = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddListing = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listingData = Object.fromEntries(formData.entries());

    listingData.email = user.email;

    fetch('https://roomivio-server.vercel.app/listings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(listingData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          navigate('/my-listings')
          Swal.fire({
            title: "Your Listing is Added",
            icon: "success",
            draggable: true,
            timer: 3000
          });
          form.reset(); 
        }
      });
  }

  return (
    <section className="py-16 px-4 bg-base-100 text-base-content">
      <motion.div
        className="max-w-4xl mx-auto bg-base-200 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">📢 Add Roommate Listing</h2>

        <form onSubmit={handleAddListing} className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-4 ..6">
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
                type="text"
                name="contact"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full"
              >
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
          </div>

          <input type="submit" value="Add Listing" className="..5 text-center btn btn-primary w-full sm:w-auto" />
        </form>
      </motion.div>
    </section>
  );
};

export default AddRoommateForm;
