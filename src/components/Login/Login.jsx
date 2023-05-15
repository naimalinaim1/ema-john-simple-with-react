import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [show, setShow] = useState(false);

  const handleSigIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-[90vh] flex justify-center items-center">
      <form
        onSubmit={handleSigIn}
        className="card-body max-w-lg border rounded-lg shadow-sm shadow-[#FF9900]"
      >
        <h3 className="text-center text-3xl font-semibold">Login</h3>
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
            type={show ? "text" : "password"}
            className="input input-bordered"
            name="password"
            required
          />
          <p
            className="mt-2 cursor-pointer text-right select-none text-[#837b7b]"
            onClick={() => setShow(!show)}
          >
            {show ? <span>Hide Password</span> : <span>Show Password</span>}
          </p>
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
