import Navbar from "./Navbar";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Footer from "./footer/Footer";
import { Typography, Rating } from "@mui/material";



export default function SingleRecipe() {
    const { recipeId } = useParams();
    const navigate = useNavigate();

    const location = useLocation();
    const propsData = location.state;


    const oneRecipe = propsData?.propsData.recipes?.find(
        (recipes) => recipes.fields.id === Number(recipeId)
    );

    console.log("this is single recipe", oneRecipe)
   
    // console.log("This is recipes", propsData?.recipes)    
    // console.log("This is singlerecipe ID",propsData?.recipes[8].fields.id)

    let ingredients = oneRecipe?.fields.ingredients.map((lines, index) => <li key={index}>{lines}</li>)

    let instructions = oneRecipe?.fields.instructions.map((lines, index) => <li key={index}>{lines}</li>)

  return (
    <div className="singlerecipe__wrapper">
        <div className="singlerecipe__header">
            <Navbar />
        </div>
        <button onClick={() => navigate(-1)}>THIS IS A TEST</button>
        <div className="singlerecipe__body_wrapper">
            <div className="singlerecipe__body_photo">
                <img src={oneRecipe?.fields.image[0].fields.file.url} alt="" />
            </div>
            <div className="singlerecipe__body_context_wrapper">
                <div className="singlerecipe__body_context_title">
                    Name: {oneRecipe?.fields.name}    
                    <Rating name="disabled" value={oneRecipe.fields.difficulty} max={3} disabled />
                                 
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

