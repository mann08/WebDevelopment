import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
  };
  return (
    <>
      <div className="container h-100 d-flex position-relative align-items-center mt-4">
        <div className="row w-100 justify-content-start pe-lg-4">
          <div className="col-md-5 col-lg-5">
            <div className="login-card d-flex flex-column gap-2 px-5 py-4 rounded-3 bg-light">
              <h2 className=" cardheader fw-bold text-center mb-1">
                Welcome Back
              </h2>

              <p className="text-center text-muted mb-3">
                Login to your Cravings account
              </p>

              <label className="form-label fw-bold fs-6">Email</label>

              <input
                type="email"
                className="form-control custom-input mb-2 py-2"
                placeholder="Enter your email"
              />

              <label className="form-label fw-bold fs-6">Password</label>

              <div className="position-relative mb-2">
                <input
                  type="password"
                  className="form-control custom-input py-2"
                  placeholder="Enter your password"
                />

                <span className="position-absolute top-50 end-0 translate-middle-y me-2 text-muted">
                  <i className="bi bi-eye"></i>
                </span>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-2 small">
                <div>
                  <input type="checkbox" /> Remember
                </div>

                <a href="#" className="text-decoration-none text-main small">
                  Forgot password?
                </a>
              </div>

              <button className="btn-register-login w-100 py-3 mb-2 fw-bold">
                Login
              </button>

              <div className="d-flex align-items-center mb-2">
                <hr className="flex-grow-1" />

                <span className="mx-2 fw-lighter text-muted">
                  Don't have an account?
                </span>

                <hr className="flex-grow-1" />
              </div>

              <p className="text-center mb-0 fs-6">
                <Link
                  to="/register"
                  id="link"
                  className="fw-semibold text-main"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
