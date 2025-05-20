import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Create an Account",
    description: "Sign up using your email, Google, or Facebook to get started quickly.",
    icon: "👤",
  },
  {
    title: "2. Post or Browse Listings",
    description: "Post a roommate request or browse through available listings in your area.",
    icon: "🏠",
  },
  {
    title: "3. Connect and Chat",
    description: "Use our secure platform to connect, chat, and finalize roommate matches.",
    icon: "💬",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-base-100 text-base-content">
      <div className="w-11/12 mx-auto max-w-7xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          🛠️ How It Works
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="card bg-base-200 shadow-md p-6 rounded-xl text-center"
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
