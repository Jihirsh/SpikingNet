import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const CustomerComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      comment:
        "SpikingNet transformed my home completely. The automation is seamless and the team was incredibly professional throughout the installation process.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      location: "Austin, TX",
      rating: 5,
      comment:
        "Amazing smart home integration! Everything works perfectly together and the mobile app makes controlling my home so easy.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      location: "Miami, FL",
      rating: 5,
      comment:
        "The best investment I made for my home. The IoT solutions are cutting-edge and the support team is always helpful.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">What Our Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real feedback from real customers who trust SpikingNet
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 glass-effect">
            <div className="flex justify-center mb-8">
              <Quote className="w-16 h-16 text-sky-600/30" />
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].comment}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-sky-200 shadow-lg"
                />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sky-600">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white/40 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/50 group glass-effect"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-sky-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-sky-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-white/40 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/50 group glass-effect"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-sky-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerComments;
