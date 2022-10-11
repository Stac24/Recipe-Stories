import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Post from '../post/Post'
import {BrowserRouter as Router} from 'react-router-dom';

test('Should render Post component',() => {
    const post = [{id: 1, title: "Smoothie", des: "Yum", img:" ", name: "John" }]
    render(<Router><Post post={post}/></Router>);
    const postEle = screen.getByTestId('post');
    expect(postEle).toBeInTheDocument();  
})

test('Should display correct title from post',() => {
    const post = {id: 1, title: "Smoothie", des: "Yum", img:" ", name: "John" }
    render(<Router><Post post={post}/></Router>);
    const postName = screen.getByTestId('title');
    expect(postName).toHaveTextContent("Smoothie")    
})

test('Should display correct name from post',() => {
    const post = {id: 1, title: "Smoothie", des: "Yum", img:" ", name: "John" }
    render(<Router><Post post={post}/></Router>);
    const postName = screen.getByTestId('name');
    expect(postName).toHaveTextContent("John")    
})

test('Should display correct description from post',() => {
    const post = {id: 1, title: "Smoothie", des: "Yum", img:" ", name: "John" }
    render(<Router><Post post={post}/></Router>);
    const postName = screen.getByTestId('des');
    expect(postName).toHaveTextContent("Yum")    
})