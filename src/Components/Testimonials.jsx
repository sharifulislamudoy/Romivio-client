import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mehzabin Akter",
    location: "Banani, Dhaka",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    feedback: "Roomivio helped me find a roommate within 2 days! The process was easy, safe, and smooth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Shakib Hasan",
    location: "Bashundhara, Dhaka",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    feedback: "I liked how simple the interface is. Found someone reliable and we’re already sharing a flat!",
    rating: 4,
  },
  {
    id: 3,
    name: "Rumana Sultana",
    location: "Mohammadpur, Dhaka",
    avatar: "https://randomuser.me/api/portraits/women/46.jpg",
    feedback: "Roomivio made it easy to connect with verified profiles. Loved the experience.",
    rating: 5,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-base-100 to-base-200 text-base-content">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-primary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          💬 What Our Users Say
        </motion.h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Genuine feedback from real users who’ve found their perfect roommate through Roomivio.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((user, i) => (
            <motion.div
              key={user.id}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-primary/10 hover:shadow-xl transition-all"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.location}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4 italic">“{user.feedback}”</p>
              <div className="text-yellow-400 text-lg">
                {"★".repeat(user.rating)}
                {"☆".repeat(5 - user.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
