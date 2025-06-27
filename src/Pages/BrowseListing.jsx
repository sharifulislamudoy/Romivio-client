import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const BrowseListings = () => {

  const listings = useLoaderData();

  return (
    <section className="py-16 px-4 bg-base-100 ">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">🏡 Browse Roommate Listings</h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Rent</th>
                <th>Room Type</th>
                <th>Availability</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {listings.length > 0 ? (
                listings.map((post) => (
                  <tr key={post._id} className="hover">
                    <td>{post.title}</td>
                    <td>{post.location}</td>
                    <td>৳{post.rent}</td>
                    <td>{post.roomType}</td>
                    <td>
                      <span
                        className={`badge ${
                          post.availability === "available"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {post.availability}
                      </span>
                    </td>
                    <td className="text-center">
                      <Link
                      to={`/listings/${post._id}`}
                      className="btn btn-sm btn-primary"
                      >
                      See More
                      </Link>
  
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6">
                    No listings available.
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

export default BrowseListings;
