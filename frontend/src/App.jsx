import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Listing from "./components/ComponentCom/Listing";
import Cart from "./components/Cart";
import Hero from "./pages/Hero";

function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home page with Header */}
        <Route path="/" element={<Home />} />

        {/* Products page (Listing) */}
        <Route
          path="/products"
          element={<Listing cart={cart} setCart={setCart} />}
        />

        {/* Cart page */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
