import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const initialState = {
    title: "",
    category: "",
    price: "",
    thumbnail: "",
  };
  const [product, setProduct] = useState(initialState);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    const response = await axios.post(
      "http://localhost:5500/products",
      product
    );
    setProduct(initialState);
  };
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <form
      className='flex flex-col gap-4 bg-gray-800 w-full p-5'
      onSubmit={handleSubmit}>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='email1'
            value='Product Title'
          />
        </div>
        <TextInput
          onChange={handleChange}
          value={product.title}
          name='title'
          id='email1'
          type='text'
          placeholder='Enter Product Name here'
          required
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='category'
            value='Category'
          />
        </div>
        <Select
          onChange={handleChange}
          value={product.category}
          name='category'
          id='category'
          className='mb-1'>
          <option value='empty'></option>
          <option value='beauty'>Beauty</option>
          <option value='furniture'>Furniture</option>
          <option value='option3'>Option 3</option>
        </Select>
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='password1'
            value='Price'
          />
        </div>
        <TextInput
          onChange={handleChange}
          value={product.price}
          name='price'
          id='password1'
          type='number'
          placeholder='Enter price here'
          required
        />
      </div>
      <div>
        <div className='mb-2 block'>
          <Label
            htmlFor='thumb'
            value='Thumbnail'
          />
        </div>
        <TextInput
          onChange={handleChange}
          value={product.thumbnail}
          name='thumbnail'
          id='thumb'
          type='text'
          placeholder='Image url here'
          required
        />
      </div>
      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default AddProduct;
