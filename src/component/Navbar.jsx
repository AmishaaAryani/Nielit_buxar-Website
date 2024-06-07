import React, { useState } from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function Navbar() {


  return (
    <>
    
    <nav id="block-style-main-menu">
                <label for="drop" className="toggle">Menu</label>
                <input type="checkbox" id="drop"/>

                    <ul className="menu with-js opacity"><li className="first leaf"><a href="/" title="">Home</a></li>
                        <li className="leaf"><a href="/about" title="About Us">About Us</a></li>
                        <li className="leaf"><a href="/contact" title="Contact Us">Contact Us</a></li>
                        <li className="leaf"><a href="/course" title="Course">Course</a></li>
                        <li className="leaf"><a href="/registraction "title="Registration">Registration</a></li>
                        
                        
                    </ul>
            </nav>

    </>

  );
}

export default Navbar;
