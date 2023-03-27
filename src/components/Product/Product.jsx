import React from "react";

const Product = ({ product }) => {
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
        <button className="absolute bottom-0 left-0 py-2.5 rounded-b-lg bg-[#FFE0B3] hover:bg-orange-300 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
