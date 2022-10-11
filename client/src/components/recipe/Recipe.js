import React from "react";
import "./recipe.css"

export default function Recipe({data}) {
  return (
    <div data-testid='recipe'>
        <h1 className="recipeTitle" data-testid="title">{data.strMeal}</h1>
        <div className="container">
            <img className="randomImg" src={data.strMealThumb}/>
            <div>
                <h2>Ingredients</h2>
                <ul className="ingredients">
                    <li>{data.strIngredient1}</li>
                    <li>{data.strIngredient2}</li>
                    <li>{data.strIngredient3}</li>
                    <li>{data.strIngredient4}</li>
                    <li data-testid="ingr5">{data.strIngredient5}</li>
                    <li>{data.strIngredient6}</li>
                    <li>{data.strIngredient7}</li>
                    <li>{data.strIngredient8}</li>  
                    <li>{data.strIngredient9}</li>
                    <li>{data.strIngredient10}</li>
                    <li>{data.strIngredient11}</li>
                    <li>{data.strIngredient12}</li>
                    <li>{data.strIngredient13}</li>
                    <li>{data.strIngredient14}</li>
                    <li>{data.strIngredient15}</li>
                    <li>{data.strIngredient16}</li>
                    <li>{data.strIngredient17}</li>
                    <li>{data.strIngredient18}</li>
                    <li>{data.strIngredient19}</li>
                    <li>{data.strIngredient20}</li> 
                </ul>
            </div>
            <div>
                <h2>Measurements</h2>
                <ul className="measurement">
                    <li>{data.strMeasure1}</li>
                    <li>{data.strMeasure2}</li>
                    <li>{data.strMeasure3}</li>
                    <li>{data.strMeasure4}</li>
                    <li>{data.strMeasure5}</li>
                    <li>{data.strMeasure6}</li>
                    <li data-testid="meas7">{data.strMeasure7}</li>
                    <li>{data.strMeasure8}</li>
                    <li>{data.strMeasure9}</li>
                    <li>{data.strMeasure10}</li>
                    <li>{data.strMeasure11}</li>
                    <li>{data.strMeasure12}</li>
                    <li>{data.strMeasure13}</li>
                    <li>{data.strMeasure14}</li>
                    <li>{data.strMeasure15}</li>
                    <li>{data.strMeasure16}</li>
                    <li>{data.strMeasure17}</li>
                    <li>{data.strMeasure18}</li>
                    <li>{data.strMeasure19}</li>
                    <li>{data.strMeasure20}</li>
                </ul>
            </div>
        </div>
        <h2 className="directions"> {data.strInstructions} </h2>
        <a href={data.strSource} target="_blank" className="url">{data.strSource}</a>
    </div>
  )
}
