import { Button, Card } from "flowbite-react";
import React from "react";

const ProductCard = ({ data }) => {
  console.log(data);
  const customTheme = {
    button: {
      color: {
        primary: "bg-red-500 hover:bg-red-600 dark:text-white",
      },
    },
  };
  return (
    <Card
      className='max-w-sm m-5'
      imgAlt='Apple Watch Series 7 in colors pink, silver, and black'
      imgSrc={data.thumbnail}>
      <a href='#'>
        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {data.title}
        </h5>
      </a>
      <div className='flex items-center justify-between'>
        <span className='text-3xl font-bold text-gray-900 dark:text-white'>
          ${data.price}
        </span>

        <Button.Group>
          <Button color='green'>Update</Button>
          <Button color='red'>Delete</Button>
          <Button
            color='info'
            className='px-2.5'>
            Cart
          </Button>
        </Button.Group>
      </div>
    </Card>
  );
};

export default ProductCard;
