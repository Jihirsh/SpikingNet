import React, { useEffect, useRef } from "react";
import { ArrowRight, Home, Wifi, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-sky-400 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-400 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div
        ref={heroRef}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto opacity-0"
      >
        {/* Icons with enhanced animations */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <Home className="w-16 h-16 text-sky-500 animate-bounce" />
              <Wifi className="w-6 h-6 text-cyan-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <Smartphone
              className="w-10 h-10 text-blue-500 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
          <span className="block text-gray-800 mb-2">You Live</span>
          <span className="block gradient-text animate-glow text-6xl md:text-8xl">
            We Automate
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          SpikingNet delivers cutting-edge IoT solutions that transform your
          house into an intelligent home with
          <span className="text-sky-600 font-semibold"> automation</span>,
          <span className="text-cyan-600 font-semibold"> security</span>, and
          <span className="text-blue-600 font-semibold"> convenience</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/shop">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl group transition-all duration-300 hover:scale-105 glow"
            >
              Get Started
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to="/insights">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-sky-300 text-sky-600 hover:bg-sky-50 hover:border-sky-400 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 glass-effect"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Home,
              title: "Smart Installation",
              desc: "Professional IoT device setup and integration",
            },
            {
              icon: Wifi,
              title: "Seamless Connectivity",
              desc: "Reliable wireless networks and automation",
            },
            {
              icon: Smartphone,
              title: "Mobile Control",
              desc: "Control your entire home from anywhere",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-sky-300 rounded-full flex justify-center glass-effect">
          <div className="w-2 h-4 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
