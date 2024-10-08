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



  const searchProducts = (search) => {
    if (!search) {
      setProduct(products);
      return;
    }

    const normalizedSearchTerm = search.toLowerCase().replace(/\s+/g, "");
    const searchedProducts = products.filter((item) =>
      item.name.toLowerCase().replace(/\s+/g, "").includes(normalizedSearchTerm)
    );

    if (searchedProducts.length === 0) {
      setProduct([]);
    } else {
      setProduct(searchedProducts);
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
      <nav className="flex justify-around h-16 items-center xs:flex xs:justify-between xs:px-4 xs:items-center xs:h-12  xs:mt-2">
        <div className="text-2xl mb-1 cursor-pointer ">
          <h2 className="xs:text-sm xs:font-semibold" onClick={() => setProduct(products)}>AJ-Stores</h2>
        </div>

        <div>
          <form
            action="submit"
            onSubmit={handlesubmit}
            className="flex items-center gap-2 xs:gap-0"
          >
            <input
              type="text"
              className="border border-black w-72 h-8 p-2 rounded-xl xs:w-32 xs:h-5 xs:text-xs xs:font-light"
              value={inputs}
              onChange={handleinput}
              placeholder="search..."
            />
            <button
              className="p-1 text-2xl rounded-lg text-black xs:text-sm xs:rounded-none xs:text-base"
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
            className="border border-black rounded-lg mt-2 xs:w-16 xs:h-4 xs:text-xs xs:mb-2"
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
