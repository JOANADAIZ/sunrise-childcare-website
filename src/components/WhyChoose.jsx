import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const WhyChoose = () => {
  return (
    <section
      id="why-choose"
      className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-300 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-300 rounded-full opacity-20"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Why Choose{" "}
              <span className="text-orange-500">Sunrise Childcare Centre?</span>
            </h2>
            <Sparkles className="w-8 h-8 text-orange-500" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            At Sunrise, we believe every child deserves a nurturing, safe, and
            stimulating environment, supporting their growth, creativity, and
            self-confidence from early education to after-school care.
          </p>
        </motion.div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-3 h-3 bg-pink-400 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="w-3 h-3 bg-purple-400 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            className="w-3 h-3 bg-blue-400 rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
