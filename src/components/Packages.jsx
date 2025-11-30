import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Zap,
  Droplet,
  Baby,
  Palette,
  Sun,
  Sparkles,
} from "lucide-react";

const Packages = () => {
  const packages = [
    {
      icon: Clock,
      title: "Full-Time Care",
      description: "Consistent daily learning and routines",
      color: "from-orange-400 to-orange-600",
    },
    {
      icon: Zap,
      title: "Part-Time Care",
      description: "Flexible schedule options",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Droplet,
      title: "Drop-In Care",
      description: "Based on availability",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Baby,
      title: "Infant & Toddler Program",
      description: "Gentle, nurturing routines",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Palette,
      title: "2-3 Program",
      description: "Readiness and enriched learning",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Sun,
      title: "After-School Care (if applicable)",
      description: "Safe and supportive space after classes",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Sparkles,
      title: "Seasonal Camps",
      description:
        "Engaging themes and hands-on activities during school breaks",
      color: "from-red-400 to-red-600",
    },
  ];

  return (
    <section
      id="packages"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer flexible childcare options designed to meet the needs of
            busy families
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pkg.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-orange-100 to-pink-100 p-8 md:p-12 rounded-3xl shadow-xl text-center"
        >
          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            Let us partner with you in building a strong foundation for your
            child's future.
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            Join us at Sunrise Childcare Centre
          </p>
          <p className="text-lg text-gray-700">
            where every child's potential is nurtured and celebrated.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
