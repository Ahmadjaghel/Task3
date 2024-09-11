import "./App.css";
import Home from "./pages/Home/Home";
import Properties from "./pages/Properties/Properties";
import { Routes, Route } from "react-router-dom";
import Property from "./pages/Property/Property";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/HomeComponents/NavBar/NavBar";
import Footer from "./components/HomeComponents/footer/Footer";
import Top from "./components/top/Top";

function App() {
  window.onload = function () {
    if (performance.navigation.type === 1) {
      window.location.replace("/");
    }
  };
  return (
    <div>
      <Top />
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Properties" Component={Properties} />
        <Route path="/Property" Component={Property} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
