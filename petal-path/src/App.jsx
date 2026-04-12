import Navbar from "./Components/Navbar/Navbar";
import SearchBar from "./Components/Search/Search";
import BrowseCategory from "./Components/Browse/Browse";
import Footer from "./Components/Footer/Footer";

const App = () => {

   return (
    <div className = "app">
      <div className = "container"> 
      <Navbar/>
      <SearchBar/>
      <BrowseCategory/>
      <Footer/>
    </div>
   </div>

   );
};

export default App;