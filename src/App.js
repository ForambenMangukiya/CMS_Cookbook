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
    fetchData()
  }, []);
console.group("This is console log recipes", recipes)

// recipes.map((i)=>{
//   const arrayString1 = "'\{" + i.fields.instructions.join(",") + "\}'" 
//   const arrayString2 = "'\{" + i.fields.ingredients.join(",") + "\}'" 
//   console.log("logging arraystring2",arrayString2)
//   pool.query(`INSERT INTO recipes(recipe_name, category, ingredients, instructions, difficulty) VALUES(${i.fields.name}, ${i.fields.category}, ${arrayString2}, ${arrayString1}, ${i.fields.difficulty}`)
// })


// console.log(recipes.map((i)=>{
//   const array1 = i.fields.instructions.join("") 
//   console.log(array1)   /* '{"Buy Wurst","Eat it"}' */
//   // INSERT INTO recipes(recipe_name, category, ingredients, instructions, difficulty) VALUES('Bratwurst', 'German', '{"Sausage", "Bread-roll"}', '{"Buy Wurst","Eat it"}', 2)
  
  
//   pool.query(`INSERT INTO recipes(recipe_name, category, ingredients, instructions, difficulty) VALUES('${i.fields.name}', '${i.fields.category}', '${i.fields.ingredients}', '${i.fields.instructions}', ${i.fields.difficulty}`)}))


  async function fetchData() {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json();
  console.log("This is consolelog data", data);
}


  return (
    <div className="App">
      <div className="App_wrap">
      <Navbar recipes={recipes} />        
      </div>
    <Footer />
    </div>
  );
}
