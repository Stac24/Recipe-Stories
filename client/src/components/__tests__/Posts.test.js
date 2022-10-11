import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Posts from '../posts/Posts'
import {BrowserRouter as Router} from 'react-router-dom';

test('Should render Posts component',() => {
    const posts = [{id: 1, title: "Smoothie", des: "Yum", img:" ", name: "John" }, {id: 2, title: "Milkshake", des: "Great", img:" ", name: "Jack" }]
    render(<Router><Posts posts={posts}/></Router>);
    const postsEle = screen.getByTestId('posts');
    expect(postsEle).toBeInTheDocument();
    
})