import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
          <Jumbotron />
          <Layout>
              <Switch>
                <Route exact path = "/" component ={Home} />
                <Route exact path = "/about" component ={About} />
                <Route exact path = "/contact" component ={Contact} />
                <Route component ={NoMatch} />
              </Switch>
          </Layout>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
