import React, { useEffect } from "react";

function Header() {
  return (
    <header className="header-light">
      <div className="logout" id="logout">
        <ul>
          <li className="logout-times">&times;</li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="./login.html">Logout</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
      <img src="/images/light-mode.svg" alt="logo" className="logo" />
      <div className="switch-mode-light" id="switch">
        <div className="icons">
          <div className="switch-light" id="switch-light">
            <div className="icon">
              <i className="fa-solid fa-moon"></i>
            </div>
          </div>
          <i className="fa-regular fa-bell"></i>
          <i className="fa-solid fa-gear"></i>
          <i className="fa-solid fa-ellipsis-vertical" id="menu"></i>
        </div>
        <div className="user">
          <div className="info">
            <h3>Ubaidullah Ahmad</h3>
            <p>+234-8027867072</p>
          </div>
          <div className="pic">
            <img src="./images/user.png" alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
