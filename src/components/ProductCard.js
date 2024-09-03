import React from "react";
import { Link } from "react-router-dom";

const Main = ({ product }) => {
  return (
    <>
      {product.length === 0 && (
        <h1 className="text-2xl flex justify-center mt-60">No Product Found</h1>
      )}
      <div className=" grid grid-cols-3 gap-7 p-6 w-full h-full  justify-center items-center xs:grid xs:grid-cols-1 xs:items-center">
        {product.map((products) => (
          <Link
            key={products.id}
            className=" w-75 max-w-xs h-96 flex items-center flex-col justify-between rounded-xl cursor-pointer shadow-custom-default hover:shadow-custom-hover transition-shadow"
            to={`/product/${products.id}`}
          >
            <div className="w-full h-60 p-2 overflow-hidden">
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
    </>
  );
};

export default Main;
