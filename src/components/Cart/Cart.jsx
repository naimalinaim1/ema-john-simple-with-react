import React from "react";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((p, c) => p + c.price, 0);
  const totalShipping = cart.reduce((p, c) => p + c.shipping, 0);
  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div>
      <h2 className="mt-7 text-center text-2xl text-[#1C2B35]">
        Order Summery
      </h2>
      <div className="text-[#2A414F] text-lg mt-12 space-y-4 pl-2">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h2 className="text-[#1C2B35] text-xl font-bold pt-6">
          Grand Total: ${grandTotal.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
