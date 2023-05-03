import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";



export default function SingleRecipe() {
    const location = useLocation();
    const propsData = location.state;
    console.log("This is logging the SingleRecipes page", propsData.recipes);
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
                <div className="singlerecipe__body_ingredients">
                    <h3>placeholder</h3> <br />
                    
                </div>
                <div className="singlerecipe__body_instructions">
                <h3>placeholder</h3> <br />
                
                </div>
            </div>
        </div>
        <div className="singlerecipe__footer">
        <h3>placeholder</h3> <br />
        </div>
      
    </div>
  )
};

