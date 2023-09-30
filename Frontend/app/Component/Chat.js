import React, { useEffect } from "react";
import Contact from "./Contact";

//contact array here
let ourContacts = [
  {
    firstName: "Ubaidullah",
    lastName: "Ahmad",
    userName: "Engr. Ubaidullah",
    pic: "../images/user.png",
    phone: "+234-8027867072",
    lastSeen: "5:35am",
    id: "9081",
  },
  {
    firstName: "Adegoju",
    lastName: "Dolapur",
    userName: "Dolapor",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAbwJ-ZCv2BgFsDzZbfYluzRdCmcVC9wQVSfMA51M&s",
    phone: "+234-00000000",
    lastSeen: "9:35pm",
    id: "9091",
  },
  {
    firstName: "Uloka",
    lastName: "Giffty",
    userName: "GifftyBabe",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPmy_FIZkQwYNs0dQ_irFTLq1EqlHf3EJFlJ8E1SW&s",
    phone: "+234-00000000",
    lastSeen: "12:05pm",
    id: "9901",
  },
  {
    firstName: "Vincent",
    lastName: "Ekezie",
    userName: "Vincent",
    pic: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    phone: "+234-70100000",
    lastSeen: "2:39pm",
    id: "9001",
  },
];
//Above Are the contact Array

function Chat() {
  return (
    <>
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
      <main className="main-light main">
        <div className="trash-nav" id="trash-nav">
          <span id="close" className="close">
            &times;
          </span>
          <a href="#">
            <i className="fa-regular fa-trash-can"></i>Trash
          </a>
          <a href="#">
            <i className="fa-solid fa-box-archive"></i>Archive
          </a>
          <a href="#">
            <i className="fa-solid fa-ban"></i>Block
          </a>
          <p>ViNDU chat</p>
        </div>
        <div className="chat-nav" id="chat-nav">
          <nav>
            <form action="#">
              <i className="fa-solid fa-search"></i>
              <input type="search" placeholder="Search" />
            </form>
            <ul className="contacts">
              {ourContacts.map(function (contact) {
                return (
                  <Contact
                    pic={contact.pic}
                    userName={contact.userName}
                    phone={contact.phone}
                    lastSeen={contact.lastSeen}
                    key={contact.id}
                  />
                );
              })}
            </ul>
          </nav>
          <div className="chat-box" id="chat">
            <div className="chat-head">
              <div className="card">
                <div className="item">
                  <i className="fa-solid fa-arrow-left"></i>
                  <div className="pic">
                    <img src="./images/user.png" alt="user" />
                  </div>
                  <div className="user">
                    <div className="info">
                      <h3>Gifftybabe</h3>
                      <p>Last seen Friday - 12:45am</p>
                    </div>
                  </div>
                </div>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </div>
            </div>
            <div className="chat-body"></div>
            <div className="chat-msg">
              <form action="#" id="form-chat">
                <input
                  type="text"
                  placeholder="Your messages here"
                  id="add-me"
                />
                <button>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chat;
