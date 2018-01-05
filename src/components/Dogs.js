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
              <input id='dogsInFamilyInput' type='text' name='name' placeholder='How many dogs?' size='20'/>
            </p>
            <p>
              Dog Food (both wet and dry):
              <input id='dogFoodInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Food Container:
              <input id='dogFoodContainer' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food and Water Bowls:
              <input id='dogBowlsInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Collars:
              <input id='dogCollarsInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Leash:
              <input id='dogLeashInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Walker:
              <input id='dogWalkerInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Poop Bags:
              <input id='dogPoopBagsInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Pooper Scooper:
              <input id='dogPooperScooperInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Toys:
              <input id='dogToysInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Medicine:
              <input id='dogMedicineInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Grooming:
              <input id='dogGroomingInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Carrier/Crate:
              <input id='dogCarrierInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Clothing:
              <input id='dogClothingInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Treats:
              <input id='dogTreatsInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Bedding:
              <input id='dogBeddingInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House:
              <input id='dogHouseInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Training :
              <input id='dogTrainginInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Lodging/Boarding:
              <input id='dogLodgingInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Sitter:
              <input id='dogSitterInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Veterinary:
              <input id='dogVeterinaryInput' type='text' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog House Modifications (Dog doors, fences, etc.):
              <input id='dogHouseModificationsInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Yard Leash:
              <input id='dogYaInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Dog (did you buy your Dog?):
              <input id='dogPurchaseInput' type='text' name='name' placeholder='How much did it cost?' size='20'/>
            </p>





            <input class='contactSubmitButton' type='submit' value='Submit Dog Costs!'/>
          </form>
        </div>
    );
  }
}



export default Dogs;
