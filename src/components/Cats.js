import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Cats extends Component {

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Cat world</p>
          <form id='catForm' method='post' enctype='text/plain'>

            <p>
              How many cats do you have?:
              <input id='catsInFamilyInput' type='number' min='0' name='name' placeholder='How many cats?' size='20'/>
            </p>
            <p>
              Cat Food (both wet and dry):
              <input id='catFoodInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Food Container:
              <input id='catFoodContainer' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Food and Water Bowls:
              <input id='catBowlsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Collars:
              <input id='catCollarsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter:
              <input id='catLitterInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Litter Box:
              <input id='catLitterBoxInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter Scooper:
              <input id='catLitterScooperInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Toys:
              <input id='catToysInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Medicine:
              <input id='catMedicineInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Grooming:
              <input id='catGroomingInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Carrier/Crate:
              <input id='catCarrierInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Clothing:
              <input id='catClothingInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Treats:
              <input id='catTreatsInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Bedding:
              <input id='catBeddingInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Tower:
              <input id='catTowerInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Scratching Post:
              <input id='catScratchingPostInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Training (can include any thing to help cats stay off counters, beds, etc.):
              <input id='catTrainginInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Lodging/Boarding:
              <input id='catLodgingInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Sitter:
              <input id='catSitterInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Veterinary:
              <input id='catVeterinaryInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat House Modifications (cat doors, etc.):
              <input id='catHouseModificationsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Cat (did you buy your cat?):
              <input id='catPurchaseInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>





            <input class='contactSubmitButton' type='submit' value='Submit Cat Costs!'/>
          </form>
        </div>
    );
  }
}



export default Cats;
