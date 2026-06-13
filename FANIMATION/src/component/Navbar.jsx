// import React from "react";
// import {GiSpinningBlades} from "react-icons/gi"
import { useState } from "react";
import "../App.css"

function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false)
    return(
        <div>
        <nav className="navbar">
         <h2 className="logo">Fanimation</h2>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>


         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#">Home</a></li>
             <li><a href="#products">Products</a></li>
              <li><a href="#gallery">Gallery</a></li>
               <li><a href="#explore">Explore</a></li>
                <li><a href="#support">Support</a></li>
                  <button className="shop-btn">SHOP NOW</button>
         </ul>
        </nav>
        {/* <p>{menuOpen ? "OPEN" : "CLOSED"}</p> */}
        </div>
    )
}
export default Navbar;