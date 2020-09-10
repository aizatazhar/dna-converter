import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import NavigationBar from "./components/NavigationBar";

class App extends Component {
  componentDidMount() {
    document.title = 'DNA Converter';
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavigationBar />
            <Switch>
              <Route exact path = "/dna-converter" component ={Home} />
              <Route exact path = "/dna-converter/about" component ={About} />
              <Route exact path = "/dna-converter/contact" component ={Contact} />
              <Route component ={NoMatch} />
            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
