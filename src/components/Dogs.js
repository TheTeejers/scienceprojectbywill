import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../js/dataCollection.js';
import firebase from 'firebase';

class Dogs extends Component {

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Dog world</p>
          <form id='petForm' method='post' encType='text/plain'>
            <p>
              What is your name?:
              <input id='catsInFamily' type='text' name='ownerName' placeholder='Optional' size='20'/>
            </p>
            <p>
              How many dogs do you have?:
              <input id='dogsInFamily' type='number' min='0' name='name' placeholder='How many dogs?' size='20'/>
            </p>
            <p>
              Dog Food (both wet and dry):
              <input id='dogFood' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Food Container:
              <input id='dogFoodContainer' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food and Water Bowls:
              <input id='dogBowls' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Collars:
              <input id='dogCollars' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Leash:
              <input id='dogLeash' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Walker:
              <input id='dogWalker' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Poop Bags:
              <input id='dogPoopBags' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Pooper Scooper:
              <input id='dogPooperScooper' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Toys:
              <input id='dogToys' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Medicine:
              <input id='dogMedicine' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Grooming:
              <input id='dogGrooming' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Carrier/Crate:
              <input id='dogCarrier' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Clothing:
              <input id='dogClothing' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Treats:
              <input id='dogTreats' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Bedding:
              <input id='dogBedding' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House:
              <input id='dogHouse' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Training :
              <input id='dogTraining' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Lodging/Boarding:
              <input id='dogLodging' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Sitter:
              <input id='dogSitter' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Veterinary:
              <input id='dogVeterinary' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog House Modifications (Dog doors, fences, etc.):
              <input id='dogHouseModifications' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Yard Leash:
              <input id='dogYardLeash' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Dog (did you buy your Dog?):
              <input id='dogPurchase' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>





            <input className='submitButton' type='submit' value='Submit Dog Costs!'/>
          </form>
           <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
          <script src='../js/dogDataCollection.js'></script>
        </div>
    );
  }
}



export default Dogs;
