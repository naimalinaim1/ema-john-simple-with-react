import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const OrderReview = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const reamingProduct = cart.filter((cart) => cart.id !== id);
    setCart(reamingProduct);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="mt-40 mb-20 relative grid grid-cols-[1fr_270px] gap-5 max-w-[1440px] mx-auto pl-6 2xl:pl-0">
      <div className="mx-auto">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveFromCart={handleRemoveFromCart}
            product={product}
          />
        ))}
      </div>
      <div
        className="fixed right-0 top-20 w-[270px] h-screen"
        style={{ background: "rgba(255, 153, 0, 0.3)" }}
      >
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link to="/checkout">
            <button className="mx-2 mt-2 btn btn-warning flex items-center justify-between w-[93%]">
              Proceed Checkout
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
