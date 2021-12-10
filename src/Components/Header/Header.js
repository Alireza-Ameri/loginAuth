import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h3>Shop</h3>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/login"> Login</Link>
          </li>
          <li>
            <Link to="/signup"> Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
