import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./client";
import About from "./components/About";
import Contact from "./components/Contact";

import Categories from './components/Categories';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    client
    .getEntries()
    .then((data) => {
    setRecipes(data.items);}
  )
    .catch(err => console.log(err));
  }, []);
console.group(recipes)


  return (
    <div className="App">
    <Routes>
      <Route path="/" components={<h2>Test</h2> } />
      <Route path='/' components={Home} />
      <Route path='/' components={About} />
      <Route path='/' components={Contact} />
      <Route path='/' components={Categories} />
    </Routes>
    <About/>
    <Contact/>
    
    <Categories/>
    </div>
    
  );
}

export default App;
