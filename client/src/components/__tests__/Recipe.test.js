import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Recipe from '../recipe/Recipe'

const recipeData = {strMeal: "Chocolate Cookies", strMealThumb: "", strIngredient1: "Chocolate Chips", strIngredient2: "Flour",
strIngredient3: "",strIngredient4: "",strIngredient5: "Eggs",strIngredient6: "",strIngredient7: "",strIngredient8: "",
strIngredient9: "",strIngredient10: "",strIngredient11: "",strIngredient12: "",strIngredient13: "",strIngredient14: "",
strIngredient15: "",strIngredient16: "",strIngredient17: "",strIngredient18: "",strIngredient19: "",strIngredient20: "",
strMeasure1: "",strMeasure1: "1 cup",strMeasure2: " 3 cups",strMeasure3: "",strMeasure4: "",strMeasure5: "",strMeasure6: "",strMeasure7: "3 tbs",
strMeasure8: "",strMeasure9: "",strMeasure10: "",strMeasure11: "",strMeasure12: "",strMeasure13: "",strMeasure14: "",strMeasure15: "",
strMeasure16: "",strMeasure17: "",strMeasure18: "",strMeasure19: "",strMeasure20: "",strInstructions: "Bake at 350 for 20min",strSource:""};


test('Should render Recipe component',() => {
    render(<Recipe data={recipeData}/>);
    const recipeEle = screen.getByTestId('recipe');
    expect(recipeEle).toBeInTheDocument();  
})

test('Should have 40 list items',() => {
    render(<Recipe data={recipeData}/>);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(40);  
});

test('Should display correct recipe name',() => {
    render(<Recipe data={recipeData}/>);
    const recipeTitle = screen.getByTestId('title');
    expect(recipeTitle).toHaveTextContent("Chocolate Cookies")    
})

test('Should display correct ingredient',() => {
    render(<Recipe data={recipeData}/>);
    const recipeIngr = screen.getByTestId('ingr5');
    expect(recipeIngr).toHaveTextContent("Eggs")    
})

test('Should display correct measurement',() => {
    render(<Recipe data={recipeData}/>);
    const recipeMeas = screen.getByTestId('meas7');
    expect(recipeMeas).toHaveTextContent("3 tbs")    
})