import Navbar from "./Navbar";
import { useLocation, useParams, useNavigate } from "react-router-dom";



export default function SingleRecipe() {
    const location = useLocation();
    const propsData = location.state;
        
    console.log("This is singlerecipe",propsData.recipes)

    let ingredients = propsData.recipes[0].fields.ingredients.map((lines, index) => <li key={index}>{lines}</li>)
    console.log("this is ingredients",ingredients)

    let instructions = propsData.recipes[0].fields.instructions.map((lines, index) => <li key={index}>{lines}</li>)

  return (
    <div className="singlerecipe__wrapper">
        <div className="singlerecipe__header">
            <Navbar />
        </div>
        <div className="singlerecipe__body_wrapper">
            <div className="singlerecipe__body_photo">
                <img src="https://www.melissashealthyliving.com/wp-content/uploads/2013/07/Tomato-Basil-Quinoa-Pasta-500x500.jpg" alt="" />
            </div>
            <div className="singlerecipe__body_context_wrapper">
                <div className="singlerecipe__body_context_title">
                    Name: {propsData.recipes[0].fields.name}                 
                </div>                
                <div className="singlerecipe__body_ingredients">
                    <h5>Ingredients: <ul>{ingredients}</ul></h5> <br />
                    
                </div>
                <div className="singlerecipe__body_instructions">
                <h5>Instructions: <ul>{instructions}</ul></h5> <br />
                
                </div>
            </div>
        </div>
        <div className="singlerecipe__footer">
        <h3>placeholder</h3> <br />
        </div>
      
    </div>
  )
};

