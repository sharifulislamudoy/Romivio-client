import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BrowseListings = () => {
  const allListings = useLoaderData();
  const [listings, setListings] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 600 });
    setListings(allListings);
  }, [allListings]);

  // Handle Sorting
  useEffect(() => {
    let sorted = [...allListings];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => a.rent - b.rent);
    } else {
      sorted.sort((a, b) => b.rent - a.rent);
    }

    if (filterType !== "all") {
      sorted = sorted.filter(
        (post) => post.roomType && post.roomType.toLowerCase() === filterType
      );
    }

    setListings(sorted);
  }, [sortOrder, filterType, allListings]);

  return (
    <section className="py-16 px-4 bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">🏡 Browse Roommate Listings</h2>

        {/* Sorting and Filtering Controls */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div>
            <label className="mr-2 font-semibold">Sort by Rent:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select select-bordered select-sm"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div>Total Listings:{listings.length}</div>

          <div>
            <label className="mr-2 font-semibold">Filter by Room Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="select select-bordered select-sm"
            >
              <option value="all">All</option>
              <option value="single">Single</option>
              <option value="shared">Shared</option>
            </select>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {listings.length > 0 ? (
            listings.map((post) => (
              <div
                key={post._id}
                className="bg-base-200 p-6 shadow-md rounded-lg flex flex-col justify-between"
                data-aos="zoom-in-up"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm mb-1">📍 {post.location}</p>
                  <p className="text-sm mb-1">💰 ৳{post.rent}</p>
                  <p className="text-sm mb-1">🛏 Room Type: {post.roomType}</p>
                  <p className="text-sm mb-1">📖 {post.description?.slice(0, 80)}...</p>
                  <span
                    className={`badge mt-2 ${post.availability === "available" ? "badge-success" : "badge-error"
                      }`}
                  >
                    {post.availability}
                  </span>
                </div>
                <Link to={`/listings/${post._id}`} className="btn btn-primary btn-sm mt-4">
                  See More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">No listings found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseListings;
