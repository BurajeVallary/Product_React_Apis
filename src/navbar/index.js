import React from "react";
import './style.css';

const Navbar = () => {
    return(
        <nav className="navbar">
        
        <a href="/products">Products</a>
        <a href="/login">Login</a>
        <a href="/addProduct">Add product</a>
       
   
      </nav>
    )
}

export default Navbar;