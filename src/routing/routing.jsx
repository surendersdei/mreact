import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "../component/footer";
import Header from '../component/header';
import Home from '../container/home';
import About from '../container/about';


function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />        
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;