import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class CatsAndDogs extends Component {

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Cat And Dog world</p>
        </div>
    );
  }
}



export default CatsAndDogs;
