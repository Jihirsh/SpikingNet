import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Connectivity from "@/components/Connectivity";
import CustomerComments from "@/components/CustomerComments";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Connectivity />
      <CustomerComments />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
