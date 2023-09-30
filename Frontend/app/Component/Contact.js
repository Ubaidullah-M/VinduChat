import React, { useEffect } from "react";

function Contact(props) {
  return (
    <>
      <li className="card">
        <div className="item">
          <div className="pic">
            <img src={props.pic} />
          </div>
          <div className="user">
            <div className="info">
              <h3>{props.userName}</h3>
              <p>{props.phone}</p>
            </div>
          </div>
        </div>
        <span className="time">{props.lastSeen}</span>
      </li>
    </>
  );
}

export default Contact;
