import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Home from './components/home/Home';

function App() {

  return (
      <Router>
    <div className="App">
      <Route path='/' exact component={Login}></Route>
      <Route path='/signup' exact component={Signup}></Route>
      <Route path='/home' exact component={Home}></Route>
    </div>
    </Router>
  );
}

export default App;
