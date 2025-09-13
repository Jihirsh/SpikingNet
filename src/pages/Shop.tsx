import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Smart Temperature Sensor",
      price: 49.99,
      originalPrice: 59.99,
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 128,
      category: "Sensors",
      isOnSale: true,
    },
    {
      id: 2,
      name: "IoT Control Hub",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      category: "Controllers",
    },
    {
      id: 3,
      name: "Smart Motion Detector",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.3,
      reviews: 156,
      category: "Sensors",
      isOnSale: true,
    },
    {
      id: 4,
      name: "Automated Light Switch",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 203,
      category: "Automation",
    },
    {
      id: 5,
      name: "Smart Security Camera",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 94,
      category: "Smart Devices",
    },
    {
      id: 6,
      name: "WiFi Range Extender",
      price: 24.99,
      originalPrice: 34.99,
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      rating: 4.2,
      reviews: 167,
      category: "Accessories",
      isOnSale: true,
    },
    {
      id: 7,
      name: "Smart Thermostat",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 112,
      category: "Automation",
    },
    {
      id: 8,
      name: "Pressure Sensor Kit",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      rating: 4.4,
      reviews: 73,
      category: "Sensors",
    },
  ];

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Smart IoT Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of IoT devices and smart automation
            solutions. Transform your space with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Filters */}
        <ProductFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="glass-effect rounded-2xl p-12 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-sky-600 hover:text-sky-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
