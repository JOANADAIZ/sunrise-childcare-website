import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Loader } from "lucide-react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    childDateOfBirth: "",
    programInterest: "",
    startDate: "",
    additionalInfo: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Prepare form data with reply-to
    const submissionData = {
      ...formData,
      _replyto: formData.email,
      _subject: `New Registration: ${formData.childName} - ${formData.programInterest}`,
    };

    try {
      const response = await fetch("https://formspree.io/f/xovorapk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          parentName: "",
          email: "",
          phone: "",
          childName: "",
          childAge: "",
          childDateOfBirth: "",
          programInterest: "",
          startDate: "",
          additionalInfo: "",
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
      id="registration"
      className="py-20 px-4 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-48 h-48 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Register Your Child
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Fill out the form below to start your enrollment process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-dashed border-orange-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Parent Information */}
            <div className="border-b-2 border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Parent/Guardian Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="parentName"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Parent/Guardian name"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="mt-6">
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
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Child Information */}
            <div className="border-b-2 border-gray-200 pb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Child Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="childName"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Child's full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="childAge"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Child's Age *
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="e.g., 2 years, 18 months"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="childDateOfBirth"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="childDateOfBirth"
                  name="childDateOfBirth"
                  value={formData.childDateOfBirth}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Program Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Program Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="programInterest"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Program of Interest *
                  </label>
                  <select
                    id="programInterest"
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a program</option>
                    <option value="Full-Time Care">Full-Time Care</option>
                    <option value="Part-Time Care">Part-Time Care</option>
                    <option value="Drop-In Care">Drop-In Care</option>
                    <option value="Infant & Toddler Program">
                      Infant & Toddler Program
                    </option>
                    <option value="2-3 Program">2-3 Program</option>
                    <option value="After-School Care">After-School Care</option>
                    <option value="Seasonal Camps">Seasonal Camps</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-lg font-semibold text-gray-700 mb-2"
                  >
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="additionalInfo"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Any special needs, allergies, or additional information we should know..."
                />
              </div>
            </div>

            {/* Hidden fields for Formspree */}
            <input type="hidden" name="_replyto" value={formData.email} />
            <input
              type="hidden"
              name="_subject"
              value={`New Registration: ${formData.childName}`}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-pink-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  Submit Registration
                </>
              )}
            </button>

            {status === "success" && (
              <div className="bg-green-100 border-2 border-green-400 text-green-700 px-4 py-3 rounded-xl text-center font-semibold">
                ✅ Thank you! Your registration has been submitted. We'll
                contact you soon!
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

export default RegistrationForm;
