import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/logo.png";

// created navbar and links
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Petal Path Logo" className="logo" />
        <Link to="/" className="logo-text">
        Petal Path
        </Link>

      </div>

      <ul>
        <li>
          <Link to="/about" className ="about"> About </Link>
          </li>

        <li>
          <Link to ="/plant-interest" className="plantInterest"> Plant Intrests</Link> 
          </li>  

        <li>Events</li>
      </ul>

      <Link to="/signin" className="signin">
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;