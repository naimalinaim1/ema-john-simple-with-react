import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order from "./components/Order/Order";
import Home from "./components/Layout/Home";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cardProductLoader from "./loaders/cardProductLoader";
import CheckOut from "./components/CheckOut/CheckOut";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";

// react router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <p className="text-center text-5xl">HOme</p>,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order-review",
        element: <OrderReview />,
        loader: cardProductLoader,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
