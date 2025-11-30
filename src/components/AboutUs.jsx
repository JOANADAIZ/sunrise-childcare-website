import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="py-20 px-4 bg-gradient-to-br from-rose-50 via-amber-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Playful Decorative elements */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-pink-300 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-yellow-300 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-300 rounded-full opacity-25 blur-lg"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-600 font-['Bubblegum_Sans',_cursive]">
            A Little About Me, Ms. Donna!
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 bg-white rounded-3xl shadow-xl border border-dashed border-purple-300 max-w-4xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-['Comic_Sans_MS',_cursive]">
            Hello! I'm Ms. Donna, and it's truly a joy to be part of your
            child's early learning journey at Sunrise Childcare Centre. With
            over 10 wonderful years as an Early Childhood Educator, I've had the
            incredible privilege of helping little ones grow, explore, and
            discover the magic of the world around them.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6 font-['Comic_Sans_MS',_cursive]">
            My passion lies in creating a space where every child feels safe,
            loved, and inspired to be themselves. I believe in fostering a rich
            environment that sparks curiosity, encourages creativity, and builds
            confidence. From fun-filled learning activities to supportive play,
            my goal is to nurture happy, thriving children who are ready to
            embrace a lifetime of learning.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed font-['Comic_Sans_MS',_cursive]">
            I'm deeply committed to child development and ensuring that each
            little personality shines brightly. I look forward to welcoming your
            family to our childcare community!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
