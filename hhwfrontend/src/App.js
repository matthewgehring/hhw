import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Air from './components/Air/Air';
import Home from './components/Home/Home';
import Labpack from './components/Labpack/Labpack';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state={
      route:'signin',
      isSignedIn: false,
    }
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signin'){
      this.setState({isSignedIn: false})
    } else if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render(){
    const {route, isSignedIn} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange}/>
        : route === 'register' ?
          <Register onRouteChange={this.onRouteChange} />
        :
        <Router>
          <div>
            <nav>
              <ul> 
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/air">Air Permit</Link>
                </li>
                <li>
                  <Link to="/labpack">labpack</Link>
                </li>
              </ul>
            </nav>
            <switch>
              <Route path ="/labpack">
                <Labpack />
              </Route>
              <Route path ="/air">
                <Air />
              </Route>
              <Route exact={true} path ="/">
                <Home />
              </Route>
            </switch>
          </div>
        </Router>
        }
      </div>
    );
  }
}

export default App;
