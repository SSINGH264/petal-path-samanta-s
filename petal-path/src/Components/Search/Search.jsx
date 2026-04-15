import "./Search.css";

const SearchBar = ({ selectedCity, setSelectedCity }) => {
    return (

        <div className="search">
             <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
      >
            <option value="" disabled>
              Search by City
            </option>
            <option value="All Cities">All Cities</option>
            <option value="New York City">New York City</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Washington D.C.">Washington D.C.</option>
            <option value="St. Louis">St. Louis</option>
        </select>

        </div>
    );
};

export default SearchBar;