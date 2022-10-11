import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import Random from '../random/Random'


jest.mock("axios", ()=>({
    __esModule: true,

    default:{
        get: ()=> ({
            data:[{strMeal: "Some Dish", strIngredient1: "Flour", strMeasure1:"3 Cups"}]
        })
    }
}))

test('Data should be returned after axios get request',async() => {
    render(<Random/>);
    const data = screen.getByTestId('recipedata')
    await waitFor(()=>
        expect(data).toBeTruthy()
    )
 })