import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Create from '../create/Create'
import axios from "axios";

// jest.mock("axios",() => ({
//     ...jest.requireActual("axios"),
//     post: jest.fn()
// }));

test('Should render Create Page',() => {
    render(<Create/>);
    const createEle = screen.getByTestId('createpost');
    expect(createEle).toBeInTheDocument();
})

test('Name of dish input should be empty',() => {
    render(<Create/>);
    const dishInput = screen.getByPlaceholderText('Name of Dish');
    expect(dishInput.value).toBe("")
})

test('Name of dish input should change when text is entered',() => {
    render(<Create/>);
    const dishInput = screen.getByPlaceholderText('Name of Dish');
    const testVal = "test";
    fireEvent.change(dishInput, {target: {value: testVal} });
    expect(dishInput.value).toBe(testVal);
})

test('About recipe textarea should be empty',() => {
    render(<Create/>);
    const aboutInput = screen.getByPlaceholderText('Tell us about your recipe...');
    expect(aboutInput.value).toBe("")
})

test('About recipe textarea should change when text is entered',() => {
    render(<Create/>);
    const aboutInput = screen.getByPlaceholderText('Tell us about your recipe...');
    const testVal = "test"
    fireEvent.change(aboutInput, {target: {value: testVal} });
    expect(aboutInput.value).toBe(testVal)
})

test('Author textarea should be empty',() => {
    render(<Create/>);
    const authorInput = screen.getByPlaceholderText('Author');
    expect(authorInput.value).toBe("")
})

test('Author textarea should change when text is entered',() => {
    render(<Create/>);
    const authorInput = screen.getByPlaceholderText('Author');
    const testVal = "test";
    fireEvent.change(authorInput, {target: {value: testVal} });
    expect(authorInput.value).toBe(testVal)
})

// test('Should add a post when handleSubmit is called', () =>{
//     render(<Create/>)
//     expect(axios.post).toHaveBeenCalledWith(
//         "/post", expect.objectContaining({
//             name: "Julie",
//             title: "Apple Pie",
//             des: "Five Stars",
//         })
//     );
// });
