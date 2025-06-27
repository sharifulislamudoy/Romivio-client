import { motion } from "framer-motion";
import { MapPin, Compass, LocateFixed } from "lucide-react";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const LocationMatching = () => {
  return (
    <motion.section
      className="..10 py-20 px-4 bg-gradient-to-b from-base-100 to-base-200 text-base-content"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-5">
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
          📍 Location Matching
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Find roommates and listings tailored to your preferred area. Near your university, office, or favorite city spot — we match what matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <LocateFixed className="w-9 h-9 text-secondary mb-3" />
            <h4 className="font-semibold text-xl mb-2">Area-Based Search</h4>
            <p className="text-sm text-gray-600">
              Narrow your search to specific neighborhoods, streets, or zones with pinpoint accuracy.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Compass className="w-9 h-9 text-secondary mb-3" />
            <h4 className="font-semibold text-xl mb-2">Proximity Filters</h4>
            <p className="text-sm text-gray-600">
              Filter listings based on proximity to schools, transit stations, or landmarks.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <MapPin className="w-9 h-9 text-secondary mb-3" />
            <h4 className="font-semibold text-xl mb-2">Map View</h4>
            <p className="text-sm text-gray-600">
              Visualize all available listings on an interactive map and choose what fits best.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LocationMatching;
