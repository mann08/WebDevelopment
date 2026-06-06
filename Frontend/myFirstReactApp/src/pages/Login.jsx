import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username :", username);
    console.log("Password :", password);
  };
  return (
    <>
      <div className=" container d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
          <h1 className=" text-center">Welcome Back</h1>
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className=" form-control"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className=" form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className=" float-end">
              <button type=" submit" className=" btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <hr/>
          <p>
            Already have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
