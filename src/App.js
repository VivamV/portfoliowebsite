import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {Projects} from "./components/Projects";
import About from "./components/About";
import { Skills } from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;