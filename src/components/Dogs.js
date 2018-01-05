import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Dogs extends Component {

  render() {
    return (
        <div>
          <form action='./'>
            <input className='returnHome' type="submit" value='Back to Select Pets!' />
          </form>
          <p> hello Dog world</p>
          <form id='dogForm' method='post' enctype='text/plain'>

            <p>
              How many dogs do you have?:
              <input id='dogsInFamilyInput' type='number' min='0' name='name' placeholder='How many dogs?' size='20'/>
            </p>
            <p>
              Dog Food (both wet and dry):
              <input id='dogFoodInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Food Container:
              <input id='dogFoodContainer' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food and Water Bowls:
              <input id='dogBowlsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Collars:
              <input id='dogCollarsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Leash:
              <input id='dogLeashInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Walker:
              <input id='dogWalkerInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Poop Bags:
              <input id='dogPoopBagsInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Pooper Scooper:
              <input id='dogPooperScooperInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Toys:
              <input id='dogToysInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Medicine:
              <input id='dogMedicineInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Grooming:
              <input id='dogGroomingInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Carrier/Crate:
              <input id='dogCarrierInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Clothing:
              <input id='dogClothingInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Treats:
              <input id='dogTreatsInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Bedding:
              <input id='dogBeddingInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House:
              <input id='dogHouseInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Training :
              <input id='dogTrainginInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Lodging/Boarding:
              <input id='dogLodgingInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Sitter:
              <input id='dogSitterInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Veterinary:
              <input id='dogVeterinaryInput' type='number' min='0' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog House Modifications (Dog doors, fences, etc.):
              <input id='dogHouseModificationsInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Yard Leash:
              <input id='dogYaInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Dog (did you buy your Dog?):
              <input id='dogPurchaseInput' type='number' min='0' name='name' placeholder='How much did it cost?' size='20'/>
            </p>





            <input class='contactSubmitButton' type='submit' value='Submit Dog Costs!'/>
          </form>
        </div>
    );
  }
}



export default Dogs;
