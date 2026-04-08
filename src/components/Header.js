import { useState } from "react";
import { LOGO_URL } from "../utlis/constants";
const Header = () => {
  const [btnNameReact, setBtnNmaeReact] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h2 className="logo-text">Zippy-Eats</h2>
        <h6 style={{ color: "#27AE60" }}> 🍔 Taste at your door 🍔</h6>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart 🛒</li>
          <button
            className="login-btn"
            onClick={() => {
             btnNameReact === 'Login' ? setBtnNmaeReact("Logout"): setBtnNmaeReact("Login")
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

