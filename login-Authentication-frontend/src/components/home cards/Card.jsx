import React from "react";

import "./card.css";

export default function Card(props) {
  return (
    <div className="mainconteiner">
    <div className="card">
      <div className="cardImg">
        <img
          src={props.image}
          // src="https://images.unsplash.com/photo-1681701323481-a013c2c1fbc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
      <div className="cardContent">
        <div className="userName">{props.name}</div>
        <div className="userEmail">{props.email}</div>
      </div>
    </div>
    </div>
  );
}
