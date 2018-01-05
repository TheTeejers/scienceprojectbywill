import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Cats from './components/Cats.js';
import Dogs from './components/Dogs.js';
import CatsAndDogs from './components/CatsAndDogs.js';

class App extends Component {
  constuctor(props){

  }





  render() {
    return (
      <div className="App">
        <Header />





        <Router>
          <div className='Home'>
            <Route exact path='/' component={ () => <Home /> } />
            <Route path='/Home' component={ () => <Home /> } />
            <Route path='/Cats' component={ () => <Cats /> } />
            <Route path='/Dogs' component={ () => <Dogs /> } />
            <Route path='/CatsAndDogs' component={ () => <CatsAndDogs /> } />
          </div>
        </Router>




      </div>
    );
  }
}

export default App;
