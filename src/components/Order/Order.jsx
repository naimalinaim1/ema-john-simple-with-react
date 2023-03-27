import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Order = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="mt-40 mb-20 relative grid grid-cols-[1fr_270px] gap-5 max-w-[1440px] mx-auto pl-6 2xl:pl-0">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:pl-20 lg:pl-0">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="bg-orange-300 fixed right-0 top-20 w-[270px] h-screen">
        <h2>Order summery: {cart.length}</h2>
      </div>
    </div>
  );
};

export default Order;
