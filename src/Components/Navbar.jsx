import { NavLink } from "react-router-dom";


export default function Navbar({recipes}) {
  console.log("This is logging the NAVBAR", recipes);
  return (
    <div className="navbar">

      <NavLink to="/">Home</NavLink>
      <NavLink to="/singlerecipe" state={{ recipes }}>Single Recipe</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/about">About</NavLink>
      
    </div>
  );
};

