import { Facebook, Instagram, X, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Smart Devices",
    "Home Automation",
    "Support Center",
    "Contact Us",
    "FAQs",
  ];

  const resources = [
    "Blog Posts",
    "User Guides",
    "Video Tutorials",
    "Community Forum",
    "Product Updates",
  ];

  const stayConnected = [
    "Social Media",
    "Email Alerts",
    "Webinars",
    "Feedback",
    "Partnerships",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: X, href: "#", label: "X (Twitter)" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Cookie Settings", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 border-t border-sky-200/30 py-16 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-sky-400 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-400 rotate-12 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 glow">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold gradient-text">SPIKINGNET</h3>
              <p className="text-sm text-sky-600 font-medium">TECHNOLOGIES</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Resources
            </h4>
            <ul className="space-y-4">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
            <h4 className="text-lg font-semibold text-gray-800 mb-6">
              Stay Connected
            </h4>
            <ul className="space-y-4 mb-8">
              {stayConnected.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-sky-600 transition-colors duration-300 hover:translate-x-1 transform block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Copyright and Links Section */}
        <div className="mt-8 pt-6 border-t border-sky-200/30">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright - Left Side */}
            <div className="text-gray-600">
              © 2025 SpikingNet Technologies. All rights reserved.
            </div>

            {/* Center - Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-300 text-sm"
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Right Side - Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full flex items-center justify-center hover:from-sky-200 hover:to-cyan-200 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-sky-600 group-hover:text-sky-700" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
