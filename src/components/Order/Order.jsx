import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { Link, useLoaderData } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { totalProducts } = useLoaderData();

  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const options = [10, 20, 30, 50];

  const handleSelectChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(0);
  };

  /**
   * Done 1. Determine the total number of items:
   * TODO 2.Define the page size
   * Done 3.Calculate the total number of pages
   */

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
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
    const exists = cart.find((pd) => pd._id === product._id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <>
      <div className="mt-40 mb-20 relative grid grid-cols-[1fr_270px] gap-5 max-w-[1440px] mx-auto pl-6 2xl:pl-0">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 md:pl-20 lg:pl-0">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div
          className="fixed right-0 top-20 w-[270px] h-screen"
          style={{ background: "rgba(255, 153, 0, 0.3)" }}
        >
          <Cart handleClearCart={handleClearCart} cart={cart}>
            <Link to="/order-review">
              <button className="mx-2 mt-2 btn btn-warning flex items-center justify-between w-[93%]">
                Order Review <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </Cart>
        </div>
      </div>

      {/* pagination */}
      <div className="text-center my-8">
        <div className="btn-group">
          {pageNumbers.map((number) => (
            <input
              key={number}
              type="radio"
              data-title={number}
              name="options"
              className={`btn ${currentPage === number ? "btn-active" : ""}`}
              onClick={() => setCurrentPage(number)}
            />
          ))}
          <select
            value={itemsPerPage}
            className="ml-6 select select-bordered"
            onChange={handleSelectChange}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Order;
