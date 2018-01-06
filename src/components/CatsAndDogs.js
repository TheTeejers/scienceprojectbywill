import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../js/dataCollection.js';
import firebase from 'firebase';
import {init as firebaseInit} from 'firebase'

class CatsAndDogs extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
  }

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Cat And Dog world</p>
          <form id='petForm' method='post' encType='text/plain'>
            <p>
              What is your name?:
              <input id='ownerName' type='text' name='ownerName' placeholder='Optional' size='20'/>
            </p>
            <p>
              How many cats do you have?:
              <input id='catsInFamily' type='number' min='0' step='1' name='name' placeholder='How many cats?' size='20'/>
            </p>
            <p>
              How many dogs do you have?:
              <input id='dogsInFamily' type='number' min='0' step='1' name='name' placeholder='How many dogs?' size='20'/>
            </p>

            <p>
              Cat Food (both wet and dry):
              <input id='catFood' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Food (both wet and dry):
              <input id='dogFood' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Food Container:
              <input id='catFoodContainer' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food Container:
              <input id='dogFoodContainer' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Food and Water Bowls:
              <input id='catBowls' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food and Water Bowls:
              <input id='dogBowls' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Collars:
              <input id='catCollars' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Collars:
              <input id='dogCollars' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Litter:
              <input id='catLitter' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Litter Box:
              <input id='catLitterBox' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter Scooper:
              <input id='catLitterScooper' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Dog Leash:
              <input id='dogLeash' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Walker:
              <input id='dogWalker' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Poop Bags:
              <input id='dogPoopBags' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Pooper Scooper:
              <input id='dogPooperScooper' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>


            <p>
              Cat Toys:
              <input id='catToys' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Toys:
              <input id='dogToys' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Medicine:
              <input id='catMedicine' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Medicine:
              <input id='dogMedicine' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Grooming:
              <input id='catGrooming' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Grooming:
              <input id='dogGrooming' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Carrier/Crate:
              <input id='catCarrier' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Carrier/Crate:
              <input id='dogCarrier' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Clothing:
              <input id='catClothing' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Clothing:
              <input id='dogClothing' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Treats:
              <input id='catTreats' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Treats:
              <input id='dogTreats' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Bedding:
              <input id='catBedding' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Bedding:
              <input id='dogBedding' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Tower:
              <input id='catTower' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Scratching Post:
              <input id='catScratchingPost' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House:
              <input id='dogHouse' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Training (can include any thing to help cats stay off counters, beds, etc.):
              <input id='catTraining' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Lodging/Boarding:
              <input id='catLodging' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Lodging/Boarding:
              <input id='dogLodging' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Sitter:
              <input id='catSitter' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Sitter:
              <input id='dogSitter' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Veterinary:
              <input id='catVeterinary' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Veterinary:
              <input id='dogVeterinary' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat House Modifications (cat doors, etc.):
              <input id='catHouseModifications' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House Modifications (Dog doors, fences, etc.):
              <input id='dogHouseModifications' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Yard Leash:
              <input id='dogYardLeash' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              The Cat (did you buy your cat?):
              <input id='catPurchase' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Dog (did you buy your Dog?):
              <input id='dogPurchase' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>






            <input className='submitButton' type='submit' value='Submit Pet Costs!'/>
          </form>
           <script src="https://www.gstatic.com/firebasejs/4.7.0/firebase.js"></script>
         <script src='.../js/dataCollection.js'></script>
        </div>
    );
  }
}



export default CatsAndDogs;
