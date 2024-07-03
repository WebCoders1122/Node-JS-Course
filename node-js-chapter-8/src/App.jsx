// App.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import { useNode } from "./context/NodeContext";
import localforage from "localforage";

function App() {
  const [products, setProducts] = useState([]);
  const { token, setToken, localforageKey } = useNode();
  const fetchProducts = async () => {
    const token2 = await localforage.getItem(localforageKey);
    const header = `Authorization: Bearer ${token2}`;
    const response = await axios.get("http://localhost:5500/products", {
      headers: header,
    });
    setProducts(response.data);
    console.log(response.data);
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
              products={products}
              setProducts={setProducts}
            />
          ))
        : null}
    </div>
  );
}

export default App;
