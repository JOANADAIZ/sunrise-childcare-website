import React from "react";
import { motion } from "framer-motion";
import { Baby, BookOpen, Heart, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Childcare for Infants and Toddlers",
      description:
        "Gentle, nurturing care for your youngest learners in a safe and loving environment.",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: BookOpen,
      title: "Fundamental Learning and Social Development Activities",
      description:
        "Engaging activities designed to build essential skills and foster social connections.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Heart,
      title:
        "Child Development Support Programs and Age-Appropriate Designed Activities",
      description:
        "Tailored programs that support each child's unique developmental journey.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Users,
      title: "Tailored Support and Guidance for Children",
      description:
        "Personalized attention to help every child thrive and reach their full potential.",
      color: "from-green-400 to-green-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full opacity-20 translate-x-40 translate-y-40"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
