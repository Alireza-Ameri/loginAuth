import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h3>Shop</h3>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="/"> Login</a>
          </li>
          <li>
            <a href="/"> Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
