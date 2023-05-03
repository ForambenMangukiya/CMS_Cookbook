import { NavLink } from "react-router-dom";


export default function Navbar({recipes}) {
  return (
    <div className="navbar">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/singlerecipe" state={{ recipes }}>Single Recipe</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/about">About</NavLink>
      
    </div>
  );
};

