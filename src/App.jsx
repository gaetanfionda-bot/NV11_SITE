import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Eshop from "./pages/Eshop.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import TryOn from "./pages/TryOn.jsx";
import Cart from "./pages/Cart.jsx";
import Admin from "./pages/Admin.jsx";

// CONTEXTE PANIER
import { CartProvider } from "./context/CartContext.jsx";

export default function App() {
  return (
    <CartProvider>
      <Header />

      {/* marge pour le header en fixed */}
      <div className="pt-20"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eshop" element={<Eshop />} />
        <Route path="/product/:ref" element={<ProductPage />} />
        <Route path="/try/:ref" element={<TryOn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </CartProvider>
  );
}
