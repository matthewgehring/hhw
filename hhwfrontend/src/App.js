import React, { Component } from 'react';
import Signin from './components/Signin/Signin';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import Air from './components/Air/Air';
import Home from './components/Home/Home';
import Labpack from './components/Labpack/Labpack';
import Test from './components/Test/Test';
import Drum from './components/Drum/Drum';
import CreateDrum from './components/CreateDrum/CreateDrum';
import './App.css';

import {
  BrowserRouter as Router,
  NavLink,
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
        {route === 'signin' ?
          <Signin onRouteChange={this.onRouteChange}/>
        : route === 'register' ?
          <Register onRouteChange={this.onRouteChange} />
        :
        <Router>
          <div className={"primary-header"}>
            <nav>
              <ul> 
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/air">Air Permit</NavLink>
                </li>
                <li>
                  <NavLink to="/labpack">Labpack</NavLink>
                </li>
                <li>
                  <NavLink to="/test">Test</NavLink>
                </li>
                <li className="navigation">
                  <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path ="/labpack" exact component={Labpack}/>
              <Route path ="/test" exact component={Test}/>
              <Route path ="/air" component={Air}/>
              <Route path="/labpack/:id" component={Drum}/>
              <Route path="/createdrum" component={CreateDrum}/>
              <Route path ="/" exact component={Home}/>
            </Switch>
          </div>
        </Router>
        }
      </div>
    );
  }
}

export default App;
