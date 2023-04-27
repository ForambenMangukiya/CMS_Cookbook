import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/about">About</NavLink>
      
    </div>
  );
};

