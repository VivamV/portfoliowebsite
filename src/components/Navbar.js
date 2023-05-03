import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="navitems">
        <Link to="/"> Home </Link>
        <Link to="/projects">Projects </Link> 
        <Link to="/about"> AboutMe </Link> 
        <Link to="/skills">MySkills</Link>     
      </div>
    </div>
  );
}

export default Navbar;