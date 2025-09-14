import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smart Temperature Sensor",
      price: 49.99,
      originalPrice: 59.99,
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=200&h=200&fit=crop",
      quantity: 2,
      category: "Sensors",
      inStock: true,
    },
    {
      id: 2,
      name: "IoT Control Hub",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=200&h=200&fit=crop",
      quantity: 1,
      category: "Controllers",
      inStock: true,
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Shopping Cart
            </h1>
            <p className="text-gray-600">Review your items before checkout</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="glass-effect rounded-2xl p-12 max-w-md mx-auto">
                <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-600 mb-6">
                  Start shopping to add items to your cart.
                </p>
                <Button className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white">
                  Continue Shopping
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card
                    key={item.id}
                    className="glass-effect bg-white/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-800">
                                {item.name}
                              </h3>
                              <Badge className="mt-1 bg-sky-100 text-sky-700">
                                {item.category}
                              </Badge>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-sky-600">
                                ${item.price}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  ${item.originalPrice}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-l-lg"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-12 h-8 flex items-center justify-center border-x border-gray-300 text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-r-lg"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <Card className="glass-effect bg-white/80 backdrop-blur-sm sticky top-32">
                  <CardHeader>
                    <CardTitle className="gradient-text">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-sky-600">${total.toFixed(2)}</span>
                    </div>

                    {shipping > 0 && (
                      <div className="text-xs text-gray-600 bg-sky-50 p-2 rounded">
                        Add ${(50 - subtotal).toFixed(2)} more for free
                        shipping!
                      </div>
                    )}

                    <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white mt-6">
                      Proceed to Checkout
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-sky-300 text-sky-600 hover:bg-sky-50"
                    >
                      Continue Shopping
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
