import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
<<<<<<< HEAD
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Petal Path Logo" className="logo" />
                <div className="logo-text">Petal Path</div>
            </div>

=======
 <div className="navbar">
            <div className = "logo-container"> 
            <img src= {logo} alt = "Petal Path Logo"className="logo"/>
            <div className = "logo-text">Petal Path</div>
        </div>
        
>>>>>>> a1c4016 (reworked the header)
            <ul>
                <li>About</li>
                <li>Discover</li>
                <li>Events</li>
            </ul>

            <div className="signin">Sign In</div>
        </div>
    );
};
