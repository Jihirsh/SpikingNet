import { useState } from "react";
import { useParams } from "react-router-dom";
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
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";

const ProductDetails = () => {
//   const { id } = useParams();
  useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, you'd fetch this based on the ID
  const product = {
    id: 1,
    name: "Smart Temperature Sensor Pro",
    price: 49.99,
    originalPrice: 59.99,
    images: [
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    ],
    rating: 4.5,
    reviews: 128,
    category: "Sensors",
    inStock: true,
    stockCount: 25,
    description:
      "Advanced IoT temperature sensor with wireless connectivity and real-time monitoring capabilities. Perfect for smart homes and industrial applications.",
    features: [
      "Wireless connectivity (WiFi & Bluetooth)",
      "Real-time monitoring",
      "Mobile app integration",
      "Battery life up to 2 years",
      "Weather resistant (IP65)",
      "Easy installation",
    ],
    specifications: {
      "Temperature Range": "-40°C to 85°C",
      Accuracy: "±0.5°C",
      Connectivity: "WiFi 2.4GHz, Bluetooth 5.0",
      Battery: "CR2032 (replaceable)",
      Dimensions: "50mm x 30mm x 15mm",
      Weight: "45g",
    },
  };

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      comment: "Excellent product! Easy to install and very accurate readings.",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 4,
      comment: "Good quality sensor, works perfectly with my smart home setup.",
      date: "2024-01-10",
    },
    {
      id: 3,
      name: "Mike Wilson",
      rating: 5,
      comment: "Great value for money. Highly recommended!",
      date: "2024-01-05",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="glass-effect rounded-2xl overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`glass-effect rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-sky-500"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 bg-sky-100 text-sky-700">
                  {product.category}
                </Badge>
                <h1 className="text-3xl font-bold gradient-text mb-4">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-sky-600">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-100 text-red-700">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">
                      In Stock ({product.stockCount} available)
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">
                      Out of Stock
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-medium">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="w-16 h-10 flex items-center justify-center border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sky-300 text-sky-600 hover:bg-sky-50"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-sky-300 text-sky-600 hover:bg-sky-50"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="space-y-3 p-4 bg-sky-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-sky-600" />
                  <span className="text-sm">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-sky-600" />
                  <span className="text-sm">2-year warranty included</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-sky-600" />
                  <span className="text-sm">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <Card className="glass-effect bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="gradient-text">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card className="glass-effect bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="gradient-text">
                    Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customer Reviews */}
            <Card className="glass-effect bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="gradient-text">
                  Customer Reviews
                </CardTitle>
                <CardDescription>
                  See what our customers are saying about this product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.name}</span>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
