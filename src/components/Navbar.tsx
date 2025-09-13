import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import SearchSidebar from "./SearchSidebar";
import UserModal from "./UserModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "SpkIOT App", href: "#spkiotapp" },
    { name: "Insights", href: "/insights" },
    { name: "Support", href: "/support" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "glass-effect shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1
                  className={`text-3xl font-bold transition-all duration-300 ${
                    scrolled ? "text-sky-600" : "text-white"
                  }`}
                >
                  <span className="gradient-text">SpikingNet</span>
                </h1>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                      scrolled
                        ? "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                        : "text-white hover:bg-white/10 hover:text-sky-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* icons and mobile menu */}
            <div className="flex items-center space-x-4">
              {/* desktop icons */}
              <div className="hidden md:flex items-center space-x-3">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                    scrolled
                      ? "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                      : "text-white hover:bg-white/10 hover:text-sky-200"
                  }`}
                >
                  <Search size={20} />
                </button>
                <Link
                  to="/cart"
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-12 ${
                    scrolled
                      ? "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                      : "text-white hover:bg-white/10 hover:text-sky-200"
                  }`}
                >
                  <ShoppingCart size={20} />
                </Link>
                <button
                  onClick={() => setIsUserModalOpen(true)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 ${
                    scrolled
                      ? "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                      : "text-white hover:bg-white/10 hover:text-sky-200"
                  }`}
                >
                  <User size={20} />
                </button>
              </div>

              {/* mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:bg-sky-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden glass-effect rounded-2xl mt-4 p-6 animate-scale-in">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* mobile icons */}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setIsOpen(false);
                  }}
                  className="p-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Search size={20} />
                </button>
                <Link
                  to="/cart"
                  className="p-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300 hover:scale-110 hover:-rotate-12"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart size={20} />
                </Link>
                <button
                  onClick={() => {
                    setIsUserModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="p-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-6"
                >
                  <User size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/*search sidebar*/}
      <SearchSidebar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/*user modal*/}
      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
