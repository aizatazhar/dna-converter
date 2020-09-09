import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
            <Switch>
              <Route exact path = "/" component ={Home} />
              <Route exact path = "/about" component ={About} />
              <Route exact path = "/contact" component ={Contact} />
              <Route component ={NoMatch} />
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
