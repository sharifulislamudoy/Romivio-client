import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const IntroTypingSection = () => {
  return (
    <section className="pt-20 px-4 bg-base-100 flex justify-center items-center text-base-content">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <h2 className="lg:text-6xl md:text-5xl text-4xl font-bold">
          Welcome to <span className="text-primary">Roomivio</span>
        </h2>
        <h3 className="text-xl font-medium text-gray-600 text-center">
          <Typewriter
            words={[
              'Find Your Ideal Roommate',
              'Browse Listings Across Dhaka',
              'Safe, Verified, and Easy',
              'Connect with Compatible People'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
      </motion.div>
    </section>
  );
};

export default IntroTypingSection;
