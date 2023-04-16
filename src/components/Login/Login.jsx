import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <form className="card-body max-w-lg border rounded-lg shadow-sm shadow-[#FF9900]">
        <h3 className="text-center text-3xl font-semibold">Login</h3>
        <div className="form-control">
          <label className="label">
            <span className="text-lg text-[#2A414F]">Email</span>
          </label>
          <input type="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg text-[#2A414F]">Password</span>
          </label>
          <input type="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <input
            className="bg-[#FF9900]/30 py-3 text-xl cursor-pointer rounded"
            type="submit"
            value="Login"
          />
          <p className="mt-3 text-[#2A414F] text-center text-base">
            New to Ema-john?
            <Link to="/signup" className="text-[#FF9900]">
              {" "}
              Create New Accout
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
