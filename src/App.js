
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navber from './Components/Navber/Navber';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Components/Blog/Blog';
import Projests from './Components/Projects/Projests';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navber></Navber>
       <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/projects">
            <Projests></Projests>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
