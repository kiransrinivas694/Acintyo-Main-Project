import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Careers from "./components/pages/Careers";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/careers" element={<Careers />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
