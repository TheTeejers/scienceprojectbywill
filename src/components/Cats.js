import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../js/dataCollection.js';
import firebase from 'firebase';

class Cats extends Component {

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Cat world</p>
          <form id='petForm' method='post' encType='text/plain'>
            <p>
              What is your name?:
              <input id='catsInFamily' type='text' name='ownerName' placeholder='Optional' size='20'/>
            </p>
            <p>
              How many cats do you have?:
              <input id='catsInFamily' type='number' min='0' name='name' placeholder='How many cats?' size='20'/>
            </p>
            <p>
              Cat Food (both wet and dry):
              <input id='catFood' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Food Container:
              <input id='catFoodContainer' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Food and Water Bowls:
              <input id='catBowls' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Collars:
              <input id='catCollars' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter:
              <input id='catLitter' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Litter Box:
              <input id='catLitterBox' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter Scooper:
              <input id='catLitterScooper' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Toys:
              <input id='catToys' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Medicine:
              <input id='catMedicine' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Grooming:
              <input id='catGrooming' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Carrier/Crate:
              <input id='catCarrier' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Clothing:
              <input id='catClothing' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Treats:
              <input id='catTreats' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Bedding:
              <input id='catBedding' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Tower:
              <input id='catTower' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Scratching Post:
              <input id='catScratchingPost' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Training (can include any thing to help cats stay off counters, beds, etc.):
              <input id='catTraining' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Lodging/Boarding:
              <input id='catLodging' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Sitter:
              <input id='catSitter' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Veterinary:
              <input id='catVeterinary' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat House Modifications (cat doors, etc.):
              <input id='catHouseModifications' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Cat (did you buy your cat?):
              <input id='catPurchase' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>





            <input className='submitButton' type='submit' value='Submit Cat Costs!'/>
          </form>
           <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
          <script src='../js/dataCollection.js'></script>
        </div>
    );
  }
}



export default Cats;
