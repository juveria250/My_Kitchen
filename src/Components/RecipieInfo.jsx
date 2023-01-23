import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
let vId="";
const RecipieInfo=()=>{ 
    const [item,setItem]=useState();
    const {MealId}=useParams();
    if(MealId!="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data.meals[0]);
        })
    }
    if(item){
        const url=item.strYoutube;
        const str=url.split("=");
        vId=str[str.length-1]
    }

    let navigate = useNavigate();
    return(
        <>
           {
            
                (!item)?"":(<>
                   <div className="content">
                       <img src={item.strMealThumb} alt="" />
                       <div className="inner-content">
                           <h1>{item.strMeal}</h1>
                           <h2>{item.strArea} Food</h2>
                           <h2>Category {item.strCategory}</h2>
                       </div>
                   </div>
                   <div className="recipe-details">
                    <div className="ingredients">
                        <h2>Ingredients</h2><br />
                        <h3>{item.strIngredient1}  {item.strMeasure1}</h3>
                        <h3>{item.strIngredient2}  {item.strMeasure2}</h3>
                        <h3>{item.strIngredient3}  {item.strMeasure3}</h3>
                        <h3>{item.strIngredient4}  {item.strMeasure4}</h3>
                        <h3>{item.strIngredient5}  {item.strMeasure5}</h3>
                        <h3>{item.strIngredient6}  {item.strMeasure6}</h3>
                        <h3>{item.strIngredient7}  {item.strMeasure7}</h3>
                        <h3>{item.strIngredient8}  {item.strMeasure8}</h3>
                    </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                        </div>
                        <div className="footer">
                        <div className="video"><br />
                            <iframe src={`https://www.youtube.com/embed/${vId}`}>

                            </iframe>
                            <div className="Button"><br />
                             <button onClick={() => navigate(-1)}>
                                Back to Home
                            </button> 
                            </div>
                        </div>
                        </div>
                </>)
           }
        </>
    )
}
export default RecipieInfo;