import React from 'react';
import { NavLink } from "react-router-dom";

const NavList = () => {
    const navbarStyle = {
        backgroundColor: "#2c3e50",
        padding: "15px 0",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      };
      
      const navContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "40px"
      };
      
      const navLinkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "500",
        padding: "8px 16px",
        borderRadius: "4px",
        transition: "all 0.3s ease"
      };
  return (
    <nav className="navbar" style={navbarStyle}>
        <div className = "nav_container" style={navContainerStyle}>
            <NavLink to = "/" className = "Nav_Link" style={navLinkStyle}>Count Activity</NavLink>
            <NavLink to = "/ListActivity" className = "Nav_Link" style={navLinkStyle}>List Activity</NavLink>
            <NavLink to = "/CreditCardValidator" className = "Nav_Link" style={navLinkStyle}>Credit Card Validator</NavLink>
            <NavLink to = "/PromiseActivity" className = "Nav_Link" style={navLinkStyle}>Promise Activity</NavLink>
        </div>
    </nav>
  );

  }



    

export default NavList;