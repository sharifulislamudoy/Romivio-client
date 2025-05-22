import { motion } from "framer-motion";
import { Users, HeartHandshake, MessageCircleHeart } from "lucide-react";

const CommunityDriven = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-base-100 text-base-content"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Users className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">🤝 Community-Driven Platform</h2>
        <p className="text-lg text-gray-600 mb-8">
          Roomivio is powered by a strong, active community. We believe that the best roommate
          matches come from shared values, transparent feedback, and genuine connections.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <HeartHandshake className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Supportive Network</h4>
            <p className="text-sm text-gray-500">
              Whether you're offering or looking for a place, Roomivio users help each other succeed.
            </p>
          </motion.div>
          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <MessageCircleHeart className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Real Conversations</h4>
            <p className="text-sm text-gray-500">
              Users leave honest reviews and share experiences, helping you make better decisions.
            </p>
          </motion.div>
          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <Users className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Built Together</h4>
            <p className="text-sm text-gray-500">
              Roomivio grows with your input — your feedback helps shape the future of co-living.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CommunityDriven;
