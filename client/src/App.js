import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Order from './components/Order'
import About from './components/About'
import './App.css';




class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing}/>
          <div className="container">
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/about" component={About}/>

          </div>
        </div>
      </Router>
    );
  }
}



export default App;
