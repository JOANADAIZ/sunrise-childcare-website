import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://horizons-cdn.hostinger.com/7ad45090-2f86-43d9-9a9b-dbbbc00a44bb/02c653858d670d09027fcde10bd69650.jpg"
              alt="Sunrise Childcare Centre logo"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Nurturing Bright Minds Every Day
            </p>
          </div>

          <div>
            <span className="text-xl font-bold mb-4 block text-orange-400">
              Quick Links
            </span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("why-choose")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about-us")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("packages")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Packages
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="text-gray-300 hover:text-orange-400 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <span className="text-xl font-bold mb-4 block text-orange-400">
              Contact Info
            </span>
            <div className="flex flex-col gap-2 text-gray-300">
              <p>778-773-6389</p>
              <p className="break-words">sunrisechildcarecentre@outlook.com</p>
              <p>6415 St. Catherines St, Vancouver, BC V5W 3G9</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            for Sunrise Childcare Centre © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
