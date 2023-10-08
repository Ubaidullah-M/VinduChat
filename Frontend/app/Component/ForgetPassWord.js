import React from "react";
import { Link } from "react-router-dom";

function ForgetPassWord() {
  return (
    <>
      <div className="app-login">
        <div className="switch-mode-light" id="switch">
          <div className="icon">
            <i className="fa-solid fa-moon"></i>
          </div>
        </div>
        <img src="light-mode.svg" alt="logo" id="image" />
        <form action="/" className="light" id="form">
          <input type="text" placeholder="Enter your registered email" />
          <div className="reg">
            <p className="txt-light" id="reg-txt">
              Don't have an account?{" "}
              <Link to="/register" className="light">
                Click here
              </Link>{" "}
              to register
            </p>
            <button className="btn-light" id="btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgetPassWord;
