import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, name, img, quantity, price } = product;

  return (
    <div className="flex items-center  gap-3 w-[580px] border border-gray-400 rounded mb-4 p-2">
      <img className="w-24 h-24 rounded-md" src={img} alt="product" />
      <div>
        <p className="text-lg font-semibold text-gray-700">{name}</p>
        <p>
          Price: <span className="text-orange-500">${price}</span>
        </p>
        <p>
          Quantity: <span className="text-orange-500">{quantity}</span>
        </p>
      </div>
      <div className="flex-grow mx-2 text-right">
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="w-14 h-14 rounded-full bg-red-100"
        >
          <FontAwesomeIcon
            className="text-red-500 text-2xl"
            icon={faTrashAlt}
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
