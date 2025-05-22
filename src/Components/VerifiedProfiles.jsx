import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const VerifiedProfiles = () => {
  return (
    <motion.section
      className="mt-6 py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-blue-500" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">✅ Verified Profiles — Trust Built In</h2>
        <p className="text-lg text-gray-600 mb-6">
          Every verified Roomivio profile has been carefully reviewed for authenticity. We ensure the
          user has a verified email, phone number, and social credentials — so you connect with real people.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-semibold text-xl mb-2">🔍 Authentic Listings</h4>
            <p className="text-gray-600 text-sm">
              Get access to genuine listings and avoid spam or fake roommate ads.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-semibold text-xl mb-2">👥 Real Roommates</h4>
            <p className="text-gray-600 text-sm">
              Verified profiles mean serious users — find people truly ready to share a home.
            </p>
          </motion.div>
          <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-semibold text-xl mb-2">🔐 Safer Communication</h4>
            <p className="text-gray-600 text-sm">
              Engage in conversations with peace of mind, knowing you're speaking to real users.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default VerifiedProfiles;
