import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Listing from "./components/ComponentCom/Listing";
import Cart from "./components/Cart";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Login/Signup";
import { Projectform } from "./components/projectCom/Projectform";

// Home Page Component
function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

// Main App Component
function App() {
  // State management
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project" element={<Projectform />} />

        {/* Products Route */}
        <Route
          path="/products"
          element={<Listing cart={cart} setCart={setCart} />}
        />

        {/* Cart Route */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;