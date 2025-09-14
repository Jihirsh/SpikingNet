import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Insights from "./pages/Insights";
import Support from "./pages/Support";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/support" element={<Support />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* add custom routes above this line */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
