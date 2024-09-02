import React, { useState } from "react";
import Main from "./ProductCard";
import { IoSearchSharp } from "react-icons/io5";

const ProductListing = ({ products }) => {
  const [product, setProduct] = useState(products);
  const [inputs, setinputs] = useState("");

  const sortCategory = (filter) => {
    let sortedCategory = [];
    switch (filter) {
      case "Footwear":
        sortedCategory = [...products].filter(
          (product) => product.category === "Footwear"
        );
        break;

      case "Electronics":
        sortedCategory = [...products].filter(
          (product) => product.category === "Electronics"
        );
        break;

      case "Clothing":
        sortedCategory = [...products].filter(
          (product) => product.category === "Clothing"
        );
        break;

      default:
        sortedCategory = products;
        break;
    }
    setProduct(sortedCategory);
  };

  const searchProducts = (searchTerm) => {
    if (searchTerm) {
      const searchedProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProduct(searchedProducts);
    } else {
      setProduct(products);
    }
  };

  const handleinput = (e) => {
    setinputs(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    searchProducts(inputs);
    setinputs("");
  };

  return (
    <>
      <nav className=" lg:flex justify-around p-3 items-center">
        <h2
          className="lg:text-2xl cursor-pointer sm:text-basic mb-3"
          onClick={() => setProduct(products)}
        >
          AJ-Stores
        </h2>

        <div>
          <form
            action="submit"
            onSubmit={handlesubmit}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              className=" lg:border border-black w-64 h-8 p-2 rounded-lg sm: border border-black"
              value={inputs}
              onChange={handleinput}
              placeholder="search..."
            />
            <button
              className="lg:p-1 text-2xl rounded-lg text-black "
              type="submit"
            >
              <IoSearchSharp />
            </button>
          </form>
        </div>

        <div>
          <select
            name="sort"
            id="sort"
            className="border border-black rounded-lg text-sm sm: mt-2"
            onChange={(e) => sortCategory(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="Footwear">Footwear</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
          </select>
        </div>
      </nav>
      <Main product={product} />
    </>
  );
};

export default ProductListing;
