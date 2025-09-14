import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help with your SpikingNet products and services. Our support
            team is here to assist you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass-effect bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="gradient-text">Contact Us</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors">
                  <Phone className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors">
                  <Mail className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-600">
                      support@spikingnet.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors">
                  <MessageCircle className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="gradient-text">Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-sm text-gray-600">
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-sky-600" />
                  <div>
                    <p className="font-medium">Weekend</p>
                    <p className="text-sm text-gray-600">
                      10:00 AM - 4:00 PM EST
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div className="lg:col-span-2">
            <Card className="glass-effect bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="gradient-text">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your issue or question in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How do I set up my IoT device?",
                answer:
                  "Each device comes with a quick setup guide. You can also find detailed instructions in our user manual or contact support for assistance.",
              },
              {
                question: "What's the warranty period?",
                answer:
                  "All our products come with a 2-year warranty covering manufacturing defects and hardware failures.",
              },
              {
                question: "Can I return a product?",
                answer:
                  "Yes, we offer a 30-day return policy for unused products in original packaging. Contact support to initiate a return.",
              },
              {
                question: "Do you offer technical support?",
                answer:
                  "Yes, we provide comprehensive technical support via phone, email, and live chat during business hours.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="glass-effect bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
