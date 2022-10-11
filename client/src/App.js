import Navbar from "./components/navbar/Navbar"
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Random from './pages/random/Random';
import Single from './pages/single/Single';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Navbar/>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/random">
              <Random />
            </Route>
            <Route path="/write">
              <Create />
            </Route>
            <Route path="/post/:postId">
              <Single/>
            </Route>
      </Router>  
  );
};

export default App;
