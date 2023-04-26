import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./client";

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
    </Routes>
    </div>
  );
}

export default App;
