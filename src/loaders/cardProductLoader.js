import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);
  const loadedProducts = await fetch("http://localhost:5000/productsByIds", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(ids),
  });
  const products = await loadedProducts.json();
  console.log(products);

  const saveCart = [];

  for (const id in storedCart) {
    if (Object.hasOwnProperty.call(storedCart, id)) {
      const addedProduct = products.find((pd) => pd._id === id);
      const quantity = storedCart[id];
      if (addedProduct) {
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
  }
  return saveCart;
};

export default cardProductLoader;
