import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ConnectAndChat = () => {
  return (
    <motion.section
      className="mt-6 py-20 px-4 bg-primary text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">🤝 Connect and Chat</h2>
        <p className="text-lg mb-6">
          Find your ideal roommate and start a conversation in real-time. All profiles are verified and ready to connect.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <Link
            to="/"
            className="bg-white text-primary font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-base-100 transition"
          >
            Start Chatting
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ConnectAndChat;
