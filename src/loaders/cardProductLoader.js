import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const saveCart = [];

  for (const id in storedCart) {
    if (Object.hasOwnProperty.call(storedCart, id)) {
      const addedProduct = products.find((pd) => pd.id === id);
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
