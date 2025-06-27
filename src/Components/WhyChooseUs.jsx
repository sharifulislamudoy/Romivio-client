import { ShieldCheck, Users, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const cardItems = [
  {
    id: 1,
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Verified Profiles",
    desc: "We manually review listings and users to reduce fraud and ensure safety.",
    link: "/verified",
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community-Driven",
    desc: "Built for students and professionals seeking compatible roommates.",
    link: "/community-driven",
  },
  {
    id: 3,
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Fast & Easy",
    desc: "Post listings or find roommates in just a few minutes — no hassle.",
    link: "/fast-easy",
  },
  {
    id: 4,
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Location Matching",
    desc: "Find roommates near you — ideal for city-specific housing needs.",
    link: "/location-matching",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 text-base-content">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          🛡️ Why Choose Roomivio?
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Your go-to platform for finding trustworthy, verified roommates in just a few clicks.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cardItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-primary/10 bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-all p-6 hover:-translate-y-1 group"
            >
              <Link to={item.link} className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
