// App.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import { useNode } from "./context/NodeContext";
import localforage from "localforage";

function App() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState("");
  const { token, setToken, localforageKey } = useNode();
  const fetchProducts = async () => {
    const token2 = await localforage.getItem(localforageKey);
    const header = `Authorization: Bearer ${token2}`;
    const response = await axios.get(`http://localhost:5500/products`, {
      headers: header,
    });
    setProducts(response.data);
    setPages(Math.ceil(response.data.length / 4));
    console.log(response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  //to handle query
  const handleQuery = async (event) => {
    const query = event.target.value.split(".");
    console.log(query);
    const response = await axios.get(
      `http://localhost:5500/products?sort=${query[0]}&order=${query[1]}`
    );
    setProducts(response.data);
    console.log(response.data);
    console.log("query");
  };

  const handlePage = async (page) => {
    console.log("page");
    const response = await axios.get(
      `http://localhost:5500/products?page=` + page
    );
    setProducts(response.data);
    console.log(response.data);
  };
  return (
    <div>
      <div className='flex justify-center items-centern gap-2'>
        <form>
          <label
            htmlFor='countries'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Select an option
          </label>
          <select
            onClick={handleQuery}
            id='countries'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
            <option></option>
            <option value='price.asc'>Price Low to High</option>
            <option value='price.desc'>Price High to Low</option>
          </select>
        </form>

        <nav aria-label='Page navigation example '>
          <ul className='inline-flex text-sm p-2.5'>
            {new Array(pages).fill(0).map((page, index) => (
              <li key={"alskdflaf" + index}>
                <button
                  onMouseDown={() => handlePage(index + 1)}
                  className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

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
