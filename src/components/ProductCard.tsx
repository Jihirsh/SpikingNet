import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isOnSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105">
      {/* Image Section */}
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {product.isOnSale && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            Sale
          </Badge>
        )}

        <Badge className="absolute top-3 right-3 bg-sky-100 text-sky-700">
          {product.category}
        </Badge>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-2">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-500 ml-2">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between mt-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-sky-600">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white group-hover:scale-105 transition-all duration-300">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
