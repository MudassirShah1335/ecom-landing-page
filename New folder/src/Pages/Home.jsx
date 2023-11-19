import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <section className="home h-[140vh] bg-no-repeat bg-cover bg-center">
      <HeroSection />
      <Features />
      <ContactUs />
    </section>
  );
};

export default Home;
