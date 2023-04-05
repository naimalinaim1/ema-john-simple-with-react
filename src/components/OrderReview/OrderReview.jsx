import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData, useSearchParams } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const OrderReview = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const reamingProduct = cart.filter((cart) => cart.id !== id);
    setCart(reamingProduct);
    removeFromDb(id);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default OrderReview;
