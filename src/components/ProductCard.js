import React from "react";
import { Link } from "react-router-dom";

const Main = ({ product }) => {
  return (
    <>
      {product.length === 0 && (
        <h1 className="text-2xl flex justify-center mt-60">No Product Found</h1>
      )}
      <div className="flex justify-center p-6 xs:p-3">
        <div className=" grid grid-cols-3 gap-10  xs:grid xs:grid-cols-1 xs:gap-4 ">
          {product.map((products) => (
            <Link
              key={products.id}
              className=" w-72 max-w-xs h-96 flex items-center flex-col justify-between rounded-xl cursor-pointer shadow-custom-default hover:shadow-custom-hover transition-shadow xs:w-64"
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
      </div>
    </>
  );
};

export default Main;
