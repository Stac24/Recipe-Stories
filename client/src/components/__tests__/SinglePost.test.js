import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import SinglePost from '../singlePost/SinglePost'
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock("axios", ()=>({
    __esModule: true,

    default:{
        get: ()=> ({
            data:[{title: "Some Recipe", des: "Good Recipe", img:"",name:"Jack"}]
        })
    }
}))


test('Should render SinglePost component',() => {
    render(<Router><SinglePost/></Router>);
    const singleEle = screen.getByTestId('single');
    expect(singleEle).toBeInTheDocument();  
})


test('Axios get request should pull the correct name from post',async() => {
    render(<Router><SinglePost/></Router>);
    const name = screen.getByTestId('name')
    await waitFor(()=>
        expect(name).toHaveTextContent("Jack")
    )
 })

 test('Axios get request should pull the correct title from post',async() => {
    render(<Router><SinglePost/></Router>);
    const name = screen.getByTestId('title')
    await waitFor(()=>
        expect(name).toHaveTextContent("Some Recipe")
    )
 })
