import "./Search.css";

const SearchBar = () => {
    return (
        <div className="search"> 
            <select defaultValue="">
                <option value="" disabled>
                    Search by City
                </option>
            <option value="New York">New York City</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Washington DC">Washington D.C.</option>
            <option value="St Louis">St. Louis</option>
        </select>

        </div>
    );
};

export default SearchBar;