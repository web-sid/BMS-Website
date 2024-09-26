import { Link } from "react-router-dom";
import { assets } from "../../assets";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar" id="navbar">
        <div className="nav">
          <img src={assets.logoSec} alt="logo" className="logo" />
          <h1 className="logo-title">BMS Wellness</h1>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
            <div className={`bar ${isOpen ? "active" : ""}`}></div>
          </div>
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/results"}>
              <a href="">Results</a>
            </Link>
          </li>
          <li>
            <Link to={"/recipes"}>Recipes</Link>
          </li>
          <li>
            <a target="_blank" href="https://ask-wellness-center.blogspot.com/">
              Blogs
            </a>
          </li>
          <li>
            <Link to={"./contact"}>
              <a>Contact Us</a>
            </Link>
          </li>
          {/* <li><button>Sign in</button></li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
