import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Order = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      const quantity = storedCart[id];
      if (!!addedProduct) {
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
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
      <div
        className="fixed right-0 top-20 w-[270px] h-screen"
        style={{ background: "rgba(255, 153, 0, 0.3)" }}
      >
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
