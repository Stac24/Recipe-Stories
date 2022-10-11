import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Navbar from '../navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

test('Should render Navbar component',() => {
    render(<Router><Navbar/></Router>);
    const navEle = screen.getByTestId('navbar');
    expect(navEle).toBeInTheDocument();  
})

test('Links should have correct text',() => {
    render(<Router><Navbar/></Router>);
    const link_1 = screen.getByTestId('link-1')
    const link_2 = screen.getByTestId('link-2')
    const link_3 = screen.getByTestId('link-3')
    expect(link_1).toHaveTextContent('HOME')  
    expect(link_2).toHaveTextContent('RANDOM RECIPE')
    expect(link_3).toHaveTextContent('WRITE POST')   
})