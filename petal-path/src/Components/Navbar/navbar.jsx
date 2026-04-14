import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Petal Path Logo" className="logo" />
        <div className="logo-text">Petal Path</div>
      </div>

      <ul>
        <li>About</li>
        <li>Discover</li>
        <li>Events</li>
      </ul>

      <Link to="/signin" className="signin">
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;