import React from "react";
import logo from "../../images/logo.svg";
const Header = () => {
  return (
    <header className="fixed top-0 z-10 bg-[#1C2B35] w-[100%]">
      <div className="navbar w-[96%] max-w-[1400px] h-[80px] mx-auto">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden bg-white hover:bg-orange-300 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/order">Order</a>
              </li>
              <li>
                <a href="/order-review">Order Review</a>
              </li>
              <li>
                <a href="/inventory">Manage Inventory</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Ema John" />
          </a>
        </div>
        <ul className="hidden lg:flex  justify-center items-center gap-8 text-white">
          <li>
            <a className="hover:text-orange-300" href="/home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-orange-300" href="/order">
              Order
            </a>
          </li>
          <li>
            <a className="hover:text-orange-300" href="/order-review">
              Order Review
            </a>
          </li>
          <li>
            <a className="hover:text-orange-300" href="/inventory">
              Manage Inventory
            </a>
          </li>
          <li>
            <a className="hover:text-orange-300" href="/login">
              Login
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
