import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import AboutUs from "./components/AboutUs";
import Packages from "./components/Packages";
import InquiryForm from "./components/InquiryForm";
import RegistrationForm from "./components/RegistrationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Sunrise Childcare Centre - Nurturing Bright Minds Every Day
        </title>
        <meta
          name="description"
          content="Sunrise Childcare Centre in Vancouver offers quality childcare for infants and toddlers with learning activities, child development support, and flexible care options."
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <Header />
        <Hero />
        <Services />
        <WhyChoose />
        <AboutUs />
        <Packages />
        <InquiryForm />
        <RegistrationForm />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
