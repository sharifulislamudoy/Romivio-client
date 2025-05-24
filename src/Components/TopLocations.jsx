import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const TopLocations = () => {
  const [locationCounts, setLocationCounts] = useState({});

  useEffect(() => {
    fetch("https://roomivio-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const counts = {};
        data.forEach((user) => {
          const loc = user.location || "Unknown";
          counts[loc] = (counts[loc] || 0) + 1;
        });
        setLocationCounts(counts);
      });
  }, []);

  const sortedLocations = Object.entries(locationCounts).sort((a, b) => b[1] - a[1]);

  return (
    <motion.section
      className="py-20 px-4 bg-gradient-to-b from-base-200 to-base-100 text-base-content"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-primary/10 p-4 rounded-full"
          >
            <MapPin className="w-10 h-10 text-primary" />
          </motion.div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary">
          📍 Top Locations
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          See where most of our users are located. This helps you connect with people near your preferred area.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sortedLocations.map(([location, count], index) => (
            <motion.div
              key={location}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3 className="text-xl font-bold text-secondary">{location}</h3>
              <p className="text-sm text-gray-600 mt-2">{count} users</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TopLocations;
