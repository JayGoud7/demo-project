import React from "react";
import Main from "./components/ProductListing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetails";

const products = [
  {
    id: 1,
    name: "Air jorden",
    price: 799.99,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1646122244998-20579990557f?q=80&w=2508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual

    description: "nice air jorden, feels like cheap.",
  },
  {
    id: 2,
    name: "Iphone 15",
    price: 149.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1688649593308-40dfbb552d00?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual
    description: "Iphone 15 is a apple phone😬",
  },
  {
    id: 3,
    name: "MacBook",
    price: 1999.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual

    description: "macbook Air, feels like touching the air",
  },
  {
    id: 4,
    name: "Computer KeyBoard",
    price: 299.99,
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual
    description: "it is a rgb keyboard and butterfly keys.",
  },
  {
    id: 5,
    name: "White Tshirt",
    price: 89.99,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual
    description: "it is a white half hands t-shirt.",
  },
  {
    id: 6,
    name: "jeans",
    price: 129.99,
    category: "Clothing",
    image:
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=2283&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual
    description: "branded jeans",
  },
  {
    id: 7,
    name: "Air Dunks",
    price: 59.99,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1656335362192-2bc9051b1824?q=80&w=2590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual

    description: "Air Dunks powered by nike",
  },
  {
    id: 8,
    name: "AirForce",
    price: 99.99,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1596480000676-abb41f2074b3?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual

    description: "Air force powered by nike",
  },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main products={products} />} />
        <Route
          path="/product/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
