import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "778-773-6389",
      href: "tel:778-773-6389",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jamiahdawn2008@gmail.com",
      href: "mailto:jamiahdawn2008@gmail.com",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "6415 St. Catherines St, Vancouver, BC V5W 3G9",
      href: "https://maps.google.com/?q=6415+St.+Catherines+St,+Vancouver,+BC+V5W+3G9",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 rounded-full opacity-20 -translate-x-32 translate-y-32"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us today to learn more about our programs and
            enrollment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-500 mb-2">
                  {info.label}
                </h3>
                <p className="text-base font-bold text-gray-800 break-words">
                  {info.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
