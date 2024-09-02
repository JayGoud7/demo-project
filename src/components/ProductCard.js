import React from "react";
import { Link } from "react-router-dom";

const Main = ({ product }) => {
  return (
    <div className="lg:grid grid-cols-3 mx-auto max-w-screen-lg gap-4 p-4  w-screen h-screen">
      {product.map((products) => (
        <Link
          key={products.id}
          className=" w-72 max-w-xs h-96 flex items-center flex-col justify-between rounded-xl cursor-pointer shadow-custom-default hover:shadow-custom-hover transition-shadow"
          to={`/product/${products.id}`}
        >
          <div className="w-full h-60 p-2 overflow-hidden ">
            <img
              className="w-full h-full object-cover rounded-md"
              src={products.image}
              alt={products.name}
            />
          </div>

          <h2 className="font-semibold">{products.name}</h2>
          <h3>${products.price}</h3>
          <p className="mb-4 text-xs">{products.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Main;
