import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-20 px-4">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-300 rounded-full opacity-40 blur-xl"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background:
                  "linear-gradient(135deg, #FF6B6B 0%, #FF9875 25%, #FFC371 50%, #8ED1FC 75%, #B452FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nurturing Bright Minds Every Day
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Welcome to Sunrise Childcare Centre, where every child's potential
              is nurtured and celebrated in a safe, stimulating environment.
            </motion.p>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <button
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </button>
              <button
                onClick={() =>
                  document.getElementById("registration").scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-full font-semibold text-lg shadow-md hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                Register Now
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                alt="A cheerful little girl in a pink dress, laughing and holding fruit"
                src="https://horizons-cdn.hostinger.com/7ad45090-2f86-43d9-9a9b-dbbbc00a44bb/84cce58ca89d55dbef11c264a5e9d38b.jpg"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-400 rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
