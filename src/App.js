import './App.css';
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
      <div className="App_wrap">
      <Navbar recipes={recipes} />        
      </div>
    <Footer />
    </div>
  );
}
