import React, { useEffect, useState } from "react";

import "./Home.css";
import NavBar from "../../components/nav bar/NavBar";
import Card from "../../components/home cards/Card";

export default function Home() {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/user/getAllUsers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    setData(responseData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="homePage">
      <NavBar />
      <div className="cardShow">
        {data.map((element, i) => {
          return (
            <Card
              key={i}
              image={element.image}
              name={element.name}
              email={element.email}
            />
          );
        })}
      </div>
    </div>
  );
}
