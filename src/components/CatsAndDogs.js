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
          <form id='catAndDogForm' method='post' enctype='text/plain'>

            <p>
              How many cats do you have?:
              <input id='catsInFamilyInput' type='number' min='0' step='1' name='name' placeholder='How many cats?' size='20'/>
            </p>
            <p>
              How many dogs do you have?:
              <input id='dogsInFamilyInput' type='number' min='0' step='1' name='name' placeholder='How many dogs?' size='20'/>
            </p>

            <p>
              Cat Food (both wet and dry):
              <input id='catFoodInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Food (both wet and dry):
              <input id='dogFoodInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
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
              <input id='catBowlsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Food and Water Bowls:
              <input id='dogBowlsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Collars:
              <input id='catCollarsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Collars:
              <input id='dogCollarsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Litter:
              <input id='catLitterInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Cat Litter Box:
              <input id='catLitterBoxInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Litter Scooper:
              <input id='catLitterScooperInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Dog Leash:
              <input id='dogLeashInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Walker:
              <input id='dogWalkerInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Poop Bags:
              <input id='dogPoopBagsInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Pooper Scooper:
              <input id='dogPooperScooperInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>


            <p>
              Cat Toys:
              <input id='catToysInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Toys:
              <input id='dogToysInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Medicine:
              <input id='catMedicineInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Medicine:
              <input id='dogMedicineInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Grooming:
              <input id='catGroomingInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Grooming:
              <input id='dogGroomingInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Carrier/Crate:
              <input id='catCarrierInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Carrier/Crate:
              <input id='dogCarrierInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Clothing:
              <input id='catClothingInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Clothing:
              <input id='dogClothingInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Treats:
              <input id='catTreatsInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Treats:
              <input id='dogTreatsInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Bedding:
              <input id='catBeddingInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Bedding:
              <input id='dogBeddingInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Tower:
              <input id='catTowerInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Scratching Post:
              <input id='catScratchingPostInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House:
              <input id='dogHouseInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              Cat Training (can include any thing to help cats stay off counters, beds, etc.):
              <input id='catTrainginInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Cat Lodging/Boarding:
              <input id='catLodgingInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Lodging/Boarding:
              <input id='dogLodgingInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Sitter:
              <input id='catSitterInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Sitter:
              <input id='dogSitterInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat Veterinary:
              <input id='catVeterinaryInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>
            <p>
              Dog Veterinary:
              <input id='dogVeterinaryInput' type='number' min='0' step='1' name='name' placeholder='Cost per year?' size='20'/>
            </p>

            <p>
              Cat House Modifications (cat doors, etc.):
              <input id='catHouseModificationsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog House Modifications (Dog doors, fences, etc.):
              <input id='dogHouseModificationsInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              Dog Yard Leash:
              <input id='dogYaInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>

            <p>
              The Cat (did you buy your cat?):
              <input id='catPurchaseInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>
            <p>
              The Dog (did you buy your Dog?):
              <input id='dogPurchaseInput' type='number' min='0' step='1' name='name' placeholder='How much did it cost?' size='20'/>
            </p>






            <input class='contactSubmitButton' type='button' value='Submit Pet Costs!'/>
          </form>
        </div>
    );
  }
}



export default CatsAndDogs;
