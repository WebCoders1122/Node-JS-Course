// App.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5500/products");
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      {products && products.length
        ? products.map((product) => (
            <ProductCard
              key={product._id}
              data={product}
            />
          ))
        : null}
    </div>
  );
}

export default App;
