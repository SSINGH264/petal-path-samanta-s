import "./Header.css";
import Navbar from "../Navbar/Navbar";

//adding the navbar feature into my header component

const Header = () => {
    return (
        <header className = "header">
            <h1>Petal Path</h1>
            <Navbar/>
        </header>
    )
}

export default Header;