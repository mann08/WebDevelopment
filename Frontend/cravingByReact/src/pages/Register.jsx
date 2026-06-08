import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fullName :", fullName);
    console.log("email :", email);
    console.log("phoneNumber :", phoneNumber);
    console.log("password :", password);
    console.log("confirmPassword :", confirmPassword);
  };

  return (
    <>
      <div className="container h-100 d-flex position-relative align-items-center mt-4">
        <div className="row w-100 justify-content-end pe-lg-4">
          <div className="col-md-5 col-lg-5">
            <div className="login-card d-flex flex-column gap-2 px-5 py-4 rounded-3 bg-light">
              <h2 className="cardheader fw-bold text-center mb-1">
                Create Account
              </h2>

              <p className="text-center text-muted mb-3">
                Join us as a Customer, Restaurant, or Rider
              </p>

              <label className="form-label fw-medium">Register as:</label>

              <div className="d-flex gap-3 mb-2">
                <div>
                  <input type="radio" name="role" defaultChecked /> Customer
                </div>
                <div>
                  <input type="radio" name="role" /> Restaurant
                </div>
                <div>
                  <input type="radio" name="role" /> Rider
                </div>
              </div>

              <input
                type="text"
                className="form-control custom-input mb-2 py-2"
                placeholder="Enter your full name"
              />

              <input
                type="email"
                className="form-control custom-input mb-2 py-2"
                placeholder="Enter your email"
              />

              <input
                type="text"
                className="form-control custom-input mb-2 py-2"
                placeholder="Enter your phone number"
              />

              <input
                type="password"
                className="form-control custom-input mb-2 py-2"
                placeholder="Enter your password"
              />

              <input
                type="password"
                className="form-control custom-input mb-2 py-2"
                placeholder="Confirm your password"
              />

              <div className="d-flex align-items-center gap-2 mb-2 small">
                <input type="checkbox" />
                <span>
                  I agree to the{" "}
                  <a href="#" className="text-main text-decoration-none">
                    terms and conditions
                  </a>
                </span>
              </div>

              <button className="btn-register-login w-100 py-3 mb-2 fw-bold">
                Register
              </button>

              <p className="text-center mb-1 fs-6">
                <span className="opacity-75 fw-lighter">
                  Already registered?
                </span>{" "}
                <Link
                  to="/login"
                  id="link"
                  className="fw-semibold text-main opacity-100"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
