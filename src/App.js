import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from './Contact/Contact';
import Menu from "./Menu";
import Service from "./Service/Service";
import PetShop from "./PetShop/PetShop";
import LoginRegister from "./LoginRegister/LoginRegister";
import "./App.css"
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path="/" element={<About name="About" />} />
            <Route exact path="/" element={<About name="About" />} />
            <Route path="/service" element={<Service name="Service" />} />
            <Route path="/pet-shop" element={<PetShop name="pet-shop" />} />
            <Route path="/contact" element={<Contact name="Contact" />} />
            <Route path="/loginregister" element={<LoginRegister name="LoginRegister" />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
