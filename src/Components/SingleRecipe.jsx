import Navbar from "./Navbar";



export default function SingleRecipe() {
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

