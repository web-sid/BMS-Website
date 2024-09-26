import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/HerbalifeAssociate01?mibextid=qi2Omg&rdid=WhHNULr5t737wXER&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FiBhWbNqDQdjCCpPq%2F%3Fmibextid%3Dqi2Omg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle />
        </a>
        <a
          href="https://www.youtube.com/channel/UCtnimy5Ilw0CiMVU7XOSjmQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
      <div className="footer-links">
        <a href="#navbar">Home</a>
        <a target="_blank" href="https://ask-wellness-center.blogspot.com/">
          Blogs
        </a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="footer-copyright">
        &copy;2024, Designed by SIDDHARTH SONI
      </div>
    </footer>
  );
};

export default Footer;
