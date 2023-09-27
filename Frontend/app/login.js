import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="switch-mode-light" id="switch">
        <div className="icon">
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <img src="light-mode.svg" alt="logo" id="image" />
      <form action="./main.html" className="light" id="form">
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <p className="forget-light" id="forget">
          Forgot password?
          <Link to="/forget-password" className="light">
            Click here
          </Link>
        </p>
        <div className="reg">
          <p className="txt-light" id="reg-txt">
            Don't have an account?
            <Link to="/register" className="light">
              Click here
            </Link>{" "}
            to register
          </p>
          <button className="btn-light" id="btn">
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
