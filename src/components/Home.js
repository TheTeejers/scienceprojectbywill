import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Home extends Component {

  render() {
    return (
        <div>
        <div className = 'petMethodSelection'>
          <form action='./Cats'>
            <input className='catsButton' type="submit" value='If you have cats, click here!' />
          </form>
          <form action='./Dogs'>
            <input className='dogsButton' type="submit" value='If you have dogs, click here!' />
          </form>
          <form action='./CatsAndDogs'>
            <input className='catsAndDogsButton' type="submit" value='If you have cats and dogs, click here!' />
          </form>
        </div>
        </div>
    );
  }
}



export default Home;
