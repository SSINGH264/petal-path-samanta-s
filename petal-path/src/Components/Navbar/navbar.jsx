import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Petal Path Logo" className="logo" />
            <ul>
                <li>About</li>
                <li>Discover</li>
                <li>Events</li>
            </ul>

            <div className="signin">Sign In</div>


        </div>
    )
}
export default Navbar