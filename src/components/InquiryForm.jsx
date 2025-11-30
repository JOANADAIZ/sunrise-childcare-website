import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader } from "lucide-react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    _replyto: "", // This will be set to the email field
    _subject: "New Inquiry from Sunrise Childcare Website",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Auto-set _replyto to match email field
      ...(name === "email" && { _replyto: value }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Prepare form data with auto-reply fields
    const submissionData = {
      ...formData,
      _replyto: formData.email, // Reply-to address (sends confirmation to user)
      _subject: `New Inquiry from ${formData.name}`, // Email subject you'll receive
      _cc: "jamiahdawn2008@gmail.com", // Optional: CC to your email
    };

    try {
      const response = await fetch("https://formspree.io/f/xrbwrngk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          _replyto: "",
          _subject: "New Inquiry from Sunrise Childcare Website",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Have Questions?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Send us a message and we'll get back to you as soon as possible!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-dashed border-purple-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="What is your inquiry about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-700 mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us what you'd like to know..."
              />
            </div>

            {/* Hidden fields for Formspree configuration */}
            <input type="hidden" name="_replyto" value={formData.email} />
            <input
              type="hidden"
              name="_subject"
              value={`New Inquiry from ${formData.name}`}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Inquiry
                </>
              )}
            </button>

            {status === "success" && (
              <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-xl text-center font-semibold">
                ✅ Thank you! Your inquiry has been sent successfully! Check
                your email for confirmation.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-xl text-center font-semibold">
                ❌ Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryForm;
