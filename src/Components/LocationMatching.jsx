import { motion } from "framer-motion";
import { MapPin, Compass, LocateFixed } from "lucide-react";

const LocationMatching = () => {
  return (
    <motion.section
      className="mt-6 py-16 px-4 bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <MapPin className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">📍 Location Matching</h2>
        <p className="text-lg text-gray-600 mb-8">
          Find roommates and listings tailored to your desired area. Whether near your university, workplace, or city center — we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <LocateFixed className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Area-Based Search</h4>
            <p className="text-sm text-gray-500">
              Narrow your search to specific neighborhoods, streets, or zones with pinpoint accuracy.
            </p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <Compass className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Proximity Filters</h4>
            <p className="text-sm text-gray-500">
              Filter listings based on proximity to schools, transit stations, or landmarks.
            </p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <MapPin className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Map View</h4>
            <p className="text-sm text-gray-500">
              Visualize all available listings on an interactive map and choose what fits best.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationMatching;
