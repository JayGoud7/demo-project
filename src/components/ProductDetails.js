import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <div className="p-5">
        <Link to={"/"} className="flex items-center gap-2 underline">
          <FaLongArrowAltLeft /> Back To Menu
        </Link>
        <div className="w-full h-72 overflow-hidden mb-5 mt-2">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.name}
          />
        </div>
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg mb-4">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default ProductDetail;
