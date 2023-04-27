import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./client";
import Navbar from './Components/Navbar';
import Footer from './Components/footer/Footer';

export default function App() {
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
      <Navbar />  

      <h1>Just a test</h1>
       
    
    {/* <Routes>
      <Route path="/" components={<h2>Test</h2> } />
    </Routes> */}

    <Footer />
    </div>
  );
}
