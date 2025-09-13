import React from "react";
// import About from "@/components/About";
// import Features from "@/components/Features";
// import Connectivity from "@/components/Connectivity";
// import CustomerComments from "@/components/CustomerComments";
// import Connect from "@/components/Connect";
// import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default Index;
