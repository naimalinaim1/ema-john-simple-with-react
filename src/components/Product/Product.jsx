import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { img, name, price, quantity, ratings, seller, shipping } = product;

  return (
    <div className="card border relative" style={{ height: "525px" }}>
      <figure className="p-1 rounded-xl">
        <img src={img} alt="product" className="h-[286px] w-full" />
      </figure>
      <div className="py-0 px-2 text-[#0E161A]">
        <h2 className="text-[21px] mt-3 mb-1">{name}</h2>
        <p className="text-lg">Price: ${price}</p>
        <div className="text-[#2A414F] mt-4">
          <p>
            <small>Manufacturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings} start</small>
          </p>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="absolute bottom-0 left-0 py-2.5 rounded-b-lg border-t-2 bg-[#FFE0B3] hover:bg-orange-300 w-full"
        >
          Add to Cart &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
