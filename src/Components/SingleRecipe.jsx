import Navbar from "./Navbar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import { Typography, Rating } from "@mui/material";



export default function SingleRecipe() {
    const { id } = useParams();
    const location = useLocation();
    const propsData = location.state;


    // const oneRecipe = propsData.recipes.find(
    //     (recipe) => recipe.fields.id === Number(recipeID)
    // );
   
    console.log("This is recipes", propsData?.recipes)    
    console.log("This is singlerecipe ID",propsData?.recipes[8].fields.id)

    let ingredients = propsData?.recipes[10].fields.ingredients.map((lines, index) => <li key={index}>{lines}</li>)

    let instructions = propsData?.recipes[10].fields.instructions.map((lines, index) => <li key={index}>{lines}</li>)

  return (
    <div className="singlerecipe__wrapper">
        <div className="singlerecipe__header">
            <Navbar />
        </div>
        <div className="singlerecipe__body_wrapper">
            <div className="singlerecipe__body_photo">
                <img src={propsData?.recipes[10].fields.image[0].fields.file.url} alt="" />
            </div>
            <div className="singlerecipe__body_context_wrapper">
                <div className="singlerecipe__body_context_title">
                    Name: {propsData?.recipes[10].fields.name}    
                    <Rating name="disabled" value={propsData.recipes[10].fields.difficulty} max={3} disabled />
                                 
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
        <Footer/>
        </div>
    </div>
  )
};

