import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TopLocations = () => {
  const [locationCounts, setLocationCounts] = useState({});

  useEffect(() => {
    fetch("https://roomivio-server.vercel.app/users")
      .then(res => res.json())
      .then(data => {
        const counts = {};
        data.forEach(user => {
          const loc = user.location || "Unknown";
          counts[loc] = (counts[loc] || 0) + 1;
        });
        setLocationCounts(counts);
      });
  }, []);

  const sortedLocations = Object.entries(locationCounts).sort((a, b) => b[1] - a[1]);

  return (
    <motion.section
      className="py-16 px-4 bg-base-200 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">📍 Top Locations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedLocations.map(([location, count], index) => (
            <motion.div
              key={location}
              className="bg-base-100 p-6 rounded-2xl shadow-lg border border-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold">{location}</h3>
              <p className="text-sm text-gray-600 mt-2">{count} users</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TopLocations;
