import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    title: "1. Create an Account",
    description: "Sign up using your email or Google to get started quickly.",
    icon: "👤",
    link: "/signup",
  },
  {
    title: "2. Post or Browse Listings",
    description: "Post a roommate request or browse available listings in your area.",
    icon: "🏠",
    link: "/browse",
  },
  {
    title: "3. Connect and Chat",
    description: "Use our secure platform to connect, chat, and finalize roommate matches.",
    icon: "💬",
    link: "/connect-and-chat",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-100 to-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-primary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🛠️ How It Works
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="group hover:-translate-y-1 transition-transform"
            >
              <Link
                to={step.link}
                className="block bg-white/90 backdrop-blur border border-primary/10 shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all h-full"
              >
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
