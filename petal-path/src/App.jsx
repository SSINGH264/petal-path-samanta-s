import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Search/Search";

const App = () => {

   return (
    <div className = "app">
      <div className = "container"> 
      <Navbar/>
      <SearchBar/>
    </div>
   </div>

   );
};

export default App;