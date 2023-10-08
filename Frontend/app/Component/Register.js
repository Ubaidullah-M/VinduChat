import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="app-login">
        <div className="switch-mode-light" id="switch">
          <div className="icon">
            <i className="fa-solid fa-moon"></i>
          </div>
        </div>
        <img src="light-mode.svg" alt="logo" id="image" />
        <form action="/login" className="light" id="form">
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <input type="text" placeholder="phone number" />
          <div className="reg">
            <p className="txt-light" id="reg-txt">
              Already have an account?{" "}
              <Link to="/" className="light">
                Click here
              </Link>{" "}
              to login
            </p>
            <button className="btn-light" id="btn">
              Regiter
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
