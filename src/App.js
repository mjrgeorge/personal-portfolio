import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import NotMatch from './components/notMatch/NotMatch';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
