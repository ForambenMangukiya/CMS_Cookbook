import { NavLink } from "react-router-dom";
import "./Header.css";
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function Navbar({recipes}) {

  console.log("This is from the navbar", recipes)

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (

    <div className="Header">

    <header className="head">
    <img src={require("../img/logo.png")} className="Logo" alt="logo"/>
    <NavLink className="page" to="/">Name of Page</NavLink>
    {/* <img className="logo" src="./src\img\cookbook.png"  /> */}
    </header>

    <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >

    <nav className="Nav">
      
        <NavLink  to="/">Home</NavLink>
        <NavLink to="/singlerecipe/:recipeId" state={{ recipes }}>Single Recipe</NavLink>
        <NavLink  to="/categories" state={{ recipes }}> Categories </NavLink>
        <NavLink  to="/about">About</NavLink>
        </nav>

        </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
        </div>
  );
};

