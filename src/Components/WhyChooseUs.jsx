import { ShieldCheck, Users, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-4 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          🛡️ Why Choose Roomivio?
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[ 
            {
              icon: <ShieldCheck className="mx-auto" />,
              title: "Verified Profiles",
              desc: "We manually review listings and users to reduce fraud and ensure safety.",
            },
            {
              icon: <Users className="mx-auto" />,
              title: "Community-Driven",
              desc: "Built for students and working professionals seeking compatible roommates.",
            },
            {
              icon: <Clock className="mx-auto" />,
              title: "Fast & Easy",
              desc: "Post listings or find roommates in just a few minutes. No complicated steps.",
            },
            {
              icon: <MapPin className="mx-auto" />,
              title: "Location-Based Matching",
              desc: "Find matches in your exact area — perfect for city-specific housing needs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="card bg-base-100 p-6 shadow-md hover:shadow-xl transition"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="text-primary mb-4 text-3xl">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
