import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import BrowseCategory from "./Components/Browse/Browse";
import Footer from "./Components/Footer/Footer";
import SignInForm from "./Components/SignIn/SignIn";
import SignUp from "./Components/SingUp/SignUp";
import About from "./Components/About/About";
import EventDetails from "./Components/Events/Events";
import PlantInterest from "./Components/PlantInterest/PlantInterest";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        
         <Routes>
          <Route path="/" element={
              <>
                <BrowseCategory />
              </>
            }
          />

           <Route path="/about" element={<About />} />
           
           <Route path="/plant-interest" element={<PlantInterest />} />

           <Route path="/events/:eventId" element={<EventDetails />} />

          <Route path="/signin" element={
            
            <div className="signin-page">

                <SignInForm />
              </div>
            }
          />

          <Route path="/signup"element={
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