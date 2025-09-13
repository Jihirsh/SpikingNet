import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Connect = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-sky-600 font-semibold mb-4">Connect</p>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to assist you with any inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-xl glass-effect">
                  <Mail className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600 mb-1">Reach us anytime at</p>
                  <p className="text-sky-600 font-medium">
                    hello@spikingnet.io
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-xl glass-effect">
                  <Phone className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600 mb-1">
                    Call us at your convenience
                  </p>
                  <p className="text-sky-600 font-medium">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-xl glass-effect">
                  <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    Office
                  </h4>
                  <p className="text-gray-600 mb-1">
                    123 Sample St, Tech Valley CA 94105 US
                  </p>
                  <p className="text-sky-600 font-medium cursor-pointer hover:underline">
                    Get Directions →
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 glass-effect">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Subscribe
              </h4>
              <p className="text-gray-600 mb-6">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 text-black border-gray-700"
                />
                <Button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white px-6 group"
                >
                  Join
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                By subscribing, you agree to our Privacy Policy and consent to
                updates.
              </p>
            </div>
          </div>

          {/* Map/Visual Element */}
          <div className="relative">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 glass-effect h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="w-16 h-16 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Visit Our Office
                </h3>
                <p className="text-gray-600">
                  Come see our smart home solutions in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
