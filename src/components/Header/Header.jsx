import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/order-review">Order Review</Link>
              </li>
              <li>
                <Link to="/inventory">Manage Inventory</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="Ema John" />
          </Link>
        </div>
        <ul className="hidden lg:flex  justify-center items-center gap-8 text-white">
          <li>
            <Link className="hover:text-orange-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" to="/order">
              Order
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" to="/order-review">
              Order Review
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" to="/inventory">
              Manage Inventory
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-300" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
