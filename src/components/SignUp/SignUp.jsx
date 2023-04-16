import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(email, password, confirmPassword);

    if (!email.includes("@")) {
      setError("Email input filed required");
      return;
    } else if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
  };

  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <form
        onSubmit={handleSignUp}
        className="card-body max-w-lg border rounded-lg shadow-sm shadow-[#FF9900]"
      >
        <h3 className="text-center text-3xl font-semibold">Sign Up</h3>
        <div className="form-control">
          <label className="label">
            <span className="text-lg text-[#2A414F]">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg text-[#2A414F]">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            name="password"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-lg text-[#2A414F]">Confirm Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            name="confirmPassword"
            required
          />
          <label className="label">
            <a href="#" className="text-lg text-[#2A414F]-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input
            className="bg-[#FF9900]/30 py-3 text-xl cursor-pointer rounded"
            type="submit"
            value="Sign Up"
          />
          <p className="mt-3 text-[#2A414F] text-center text-base">
            Already have an account?
            <Link to="/login" className="text-[#FF9900]">
              {" "}
              Login
            </Link>
          </p>
          <p className="mt-3 text-red-400 text-center text-base">{error}</p>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
