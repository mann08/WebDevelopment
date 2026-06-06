import { useState } from "react";

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
  }


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light">
          <h1 className="text-center">Register</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <br />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
             <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
             <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Register  
              </button>
            </div>
          </form>
            
        </div>
      </div>
    </>
  );
}
export default Register;