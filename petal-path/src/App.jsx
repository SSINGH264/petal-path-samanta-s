import Header from "./Components/Header/Header";
import SearchBar from "./Components/Search/Search";
import BrowseCategory from "./Components/Browse/Browse";
import Footer from "./Components/Footer/Footer";

const App = () => {

   return (
    <div className = "app">
      <div className = "container"> 
      <Header/>
      <SearchBar/>
      <BrowseCategory/>
      <Footer/>
    </div>
   </div>

   );
};

export default App;