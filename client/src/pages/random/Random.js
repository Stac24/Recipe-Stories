import axios from 'axios';
import React from 'react'
import {useState } from "react";
import Recipe from '../../components/recipe/Recipe';
import './random.css';

export default function Random() {

  const [item,setItem] = useState();
  const [show, setShow] = useState(false);
 
  const randomRecipe = async() =>{
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
    setItem(res.data.meals[0])
    setShow(true)
  }

  return(
    <div className="recipeItem">
      <div data-testid="recipedata">
        {show? <Recipe data={item}/> : ""}
      </div>
      <div className='random'>
        <h1 className='inspiration'>Need Inspiration?</h1>
        <button onClick={randomRecipe} className='randomButton'>Random Recipe</button>
      </div>
    </div>
  )

}
