import { motion } from "framer-motion";
import { Clock, Rocket, SearchCheck } from "lucide-react";

const FastEasy = () => {
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
          <Rocket className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">⚡ Fast & Easy Experience</h2>
        <p className="text-lg text-gray-600 mb-8">
          From finding a roommate to listing your space, Roomivio makes the process effortless and quick.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <SearchCheck className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Smart Search</h4>
            <p className="text-sm text-gray-500">
              Instantly find listings that match your preferences and budget — no wasted time.
            </p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <Clock className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Quick Setup</h4>
            <p className="text-sm text-gray-500">
              Post a listing or join one in under a minute. It’s that fast to get started.
            </p>
          </motion.div>

          <motion.div
            className="bg-base-200 p-6 rounded-2xl shadow hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
          >
            <Rocket className="w-8 h-8 text-secondary mb-2" />
            <h4 className="font-semibold text-xl mb-1">Smooth Experience</h4>
            <p className="text-sm text-gray-500">
              Clean design and simple tools help you focus on what matters — finding the right fit.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FastEasy;
