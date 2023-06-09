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
        (recipes) => recipes.id === Number(recipeId)
    );
    const imagePath = process.env.PUBLIC_URL + `/img/${oneRecipe.id}.jpg`

    console.log("this is single recipe", oneRecipe)
   
    // console.log("This is recipes", propsData?.recipes)    
    // console.log("This is singlerecipe ID",propsData?.recipes[8].fields.id)

    let ingredients = oneRecipe?.ingredients.map((lines, index) => <li key={index}>{lines}</li>)

    let instructions = oneRecipe?.instructions.map((lines, index) => <li key={index}>{lines}</li>)

  return (
    <div className="singlerecipe__wrapper">
        <div className="singlerecipe__header">
            <Navbar />
        </div>
        <button onClick={() => navigate(-1)}>GO BACK BUTTON</button>
        <div className="singlerecipe__body_wrapper">
            <div className="singlerecipe__body_photo">
                <img className="single_recipe_image" src={imagePath}  alt="" />
            </div>
            <div className="singlerecipe__body_context_wrapper">
                <div className="singlerecipe__body_context_title">
                    <h2>{oneRecipe?.recipe_name}</h2>    
                    <Typography component="legend" style={{ display:"flex", alignItems:"flex-end" }}>Difficulty <Rating name="disabled" style={{ opacity: 1 }} value={oneRecipe.difficulty} max={3} disabled /></Typography>            
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

