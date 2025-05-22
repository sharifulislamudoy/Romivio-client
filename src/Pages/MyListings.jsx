import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";

const MyListings = () => {

  const initialListings = useLoaderData();
  const [listings , setListings] = useState(initialListings)

  if(!listings.length) return <LoadingSpinner></LoadingSpinner>

  const handleDelete = (_id) => {


    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/listings/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success"
              });

              const remainingListings = listings.filter(list => list._id !== _id);
              setListings(remainingListings)
            }
          })
      }
    });

  }

  
  return (
    <section className="py-16 px-4 bg-base-100 text-base-content mt-10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">📋 My Roommate Listings</h2>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="table w-full">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Availability</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings?.length > 0 ? (
                listings.map((listing) => (
                  <tr key={listing._id} className="hover">
                    <td className="font-medium">{listing.title}</td>
                    <td>{listing.location}</td>
                    <td>৳{listing.rent}</td>
                    <td>
                      <span
                        className={`badge ${listing.availability === "available"
                          ? "badge-success"
                          : "badge-error"
                          }`}
                      >
                        {listing.availability}
                      </span>
                    </td>
                    <td className="text-center space-x-2">
                      <Link to={`/update-roommate/${listing._id}`}>
                        <button
                          className="btn btn-sm btn-info"
                        >
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-8">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default MyListings;
