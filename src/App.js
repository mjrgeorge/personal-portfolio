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
import Portfolio from './components/portfolio/Portfolio';
import Cv from './components/resume/Resume';
import Blogs from './components/blogs/Blogs';
import NavBar from './components/home/navBar/NavBar';
import Footer from './components/home/footer/Footer';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <NavBar/>
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
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/resume">
          <Cv />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/skills">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;