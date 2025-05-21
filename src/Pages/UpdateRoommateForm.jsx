import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateRoommateForm = () => {

  const navigate = useNavigate();

  const handleAddListing = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const listingData = Object.fromEntries(formData.entries());
    console.log(listingData);

    // Send data to the Server

    fetch('http://localhost:3000/add-listing', {
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
            timer:3000
          });

          // form.reset();

        }
      });
  }



  // const [formData, setFormData] = useState({
  //   title: "",
  //   location: "",
  //   rent: "",
  //   roomType: "",
  //   lifestyle: "",
  //   description: "",
  //   contact: "",
  //   availability: "available",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // handle your API call here
  //   console.log("Form Submitted:", { ...formData, email: user.email, name: user.name });
  // };

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

        <form onSubmit={handleAddListing} className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block font-medium mb-1">Your Name</label>
              <input
                type="text"
                // value={user.name}
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                readOnly
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Your Email</label>
              <input
                type="email"
                // value={user.email}
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
              //   value={formData.title}
              //   onChange={handleChange}
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
                // value={formData.location}
                // onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Rent Amount (BDT)</label>
              <input
                type="number"
                name="rent"
                className="input input-bordered w-full"
                // value={formData.rent}
                // onChange={handleChange}
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
                // value={formData.roomType}
                // onChange={handleChange}
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
              // value={formData.lifestyle}
              // onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              rows="4"
              className="textarea textarea-bordered w-full"
              //   value={formData.description}
              //   onChange={handleChange}
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
                // value={formData.contact}
                // onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Availability</label>
              <select
                name="availability"
                className="select select-bordered w-full"
              // value={formData.availability}
              // onChange={handleChange}
              >
                <option value="available">Available</option>
                <option value="not_available">Not Available</option>
              </select>
            </div>
          </div>

          <input type="submit" value="Update Listing" className="mt-5 text-center btn btn-primary w-full sm:w-auto" />
        </form>
      </motion.div>
    </section>
  );
};

export default UpdateRoommateForm;
