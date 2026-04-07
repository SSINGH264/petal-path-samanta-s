import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="" alt="" className="logo"/>

            <ul>
                <li>Home</li>
                <li>Discover</li>
                <li>Events</li>
                <li>Sign In</li>
            </ul>

            <div className= "search-box">
                <input type="Text" placeholder="Search"/>
                <img src="" alt="" />
            </div>
        </div>
    )
}
export default Navbar