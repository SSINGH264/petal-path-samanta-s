import { Routes, Route } from "react-router-dom";


import Header from "./Components/Header/Header";
import SearchBar from "./Components/Search/Search";
import BrowseCategory from "./Components/Browse/Browse";
import Footer from "./Components/Footer/Footer";
import SignInForm from "./Components/SignIn/SignIn";
import SignUp from "./Components/SingUp/SignUp";
import About from "./Components/About/About";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        
         <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <BrowseCategory />
              </>
            }
          />

           <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/signin"
            element={
              <div className="signin-page">
                <SignInForm />
              </div>
            }
          />

          <Route
            path="/signup"
            element={
              <div className="signin-page">
                <SignUp />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;