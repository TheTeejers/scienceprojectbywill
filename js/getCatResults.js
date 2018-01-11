// Initialize Firebase
var config = {
  apiKey: "AIzaSyA_FssRS8PtRnUZds2eyV3BD4LToT26fo4",
  authDomain: "petcostproject.firebaseapp.com",
  databaseURL: "https://petcostproject.firebaseio.com",
  projectId: "petcostproject",
  storageBucket: "petcostproject.appspot.com",
  messagingSenderId: "805579558495"
};
  firebase.initializeApp(config);
  database = firebase.database();

var refCatsAndDogs = database.ref('catAndDogCosts');
  refCatsAndDogs.on('value', gotDataCatsAndDogs, errData);

  var catsInFamily = [];
  var inputData = [];
  var catFood = [];
  var catFoodContainer = [];
  var catBowls = [];
  var catCollars = [];
  var catLitter = [];
  var catLitterBox = [];
  var catLitterScooper = [];
  var catToys = [];
  var catMedicine = [];
  var catGrooming = [];
  var catCarrier = [];
  var catClothing = [];
  var catTreats = [];
  var catBedding = [];
  var catTower = [];
  var catScratchingPost = [];
  var catTraining = [];
  var catLodging = [];
  var catSitter = [];
  var catVeterinary = [];
  var catHouseModifications = [];
  var catPurchase = [];
  var catFoodTotal = [];
  var catFoodContainerTotal = [];
  var catBowlsTotal = [];
  var catCollarsTotal = [];
  var catLitterTotal = [];
  var catLitterBoxTotal = [];
  var catLitterScooperTotal = [];
  var catToysTotal = [];
  var catMedicineTotal = [];
  var catGroomingTotal = [];
  var catCarrierTotal = [];
  var catClothingTotal = [];
  var catTreatsTotal = [];
  var catBeddingTotal = [];
  var catTowerTotal = [];
  var catScratchingPostTotal = [];
  var catTrainingTotal = [];
  var catLodgingTotal = [];
  var catSitterTotal = [];
  var catVeterinaryTotal = [];
  var catHouseModificationsTotal = [];
  var catPurchaseTotal = [];
  var catsInFamilyTotal = [];



// get data
function gotDataCatsAndDogs(data){
  var catsInFamilySum = [];
  for(var x in data.val()) {
    inputData.push(data.val()[x]);
  }
  for (var i = 0; i < inputData.length; i++){
    catsInFamily.push(inputData[i].catsInFamily);
    catFood.push(inputData[i].catFood);
    catFoodContainer.push(inputData[i].catFoodContainer);
    catBowls.push(inputData[i].catBowls);
    catCollars.push(inputData[i].catCollars);
    catLitter.push(inputData[i].catLitter);
    catLitterBox.push(inputData[i].catLitterBox);
    catLitterScooper.push(inputData[i].catLitterScooper);
    catToys.push(inputData[i].catToys);
    catMedicine.push(inputData[i].catMedicine);
    catGrooming.push(inputData[i].catGrooming);
    catCarrier.push(inputData[i].catCarrier);
    catClothing.push(inputData[i].catClothing);
    catTreats.push(inputData[i].catTreats);
    catBedding.push(inputData[i].catBedding);
    catTower.push(inputData[i].catTower);
    catScratchingPost.push(inputData[i].catScratchingPost);
    catTraining.push(inputData[i].catTraining);
    catLodging.push(inputData[i].catLodging);
    catSitter.push(inputData[i].catSitter);
    catVeterinary.push(inputData[i].catVeterinary);
    catHouseModifications.push(inputData[i].catHouseModifications);
    catPurchase.push(inputData[i].catPurchase);
  }

  for (var i = 0; i < catFood.length; i++ ){
    if (catFood[i] > 0 ){
      catFoodTotal.push(parseInt(catFood[i]));
    }
   }
    var catFoodSum = catFoodTotal.reduce(function (a, b) {
     return a + b;
    });


   for (var i = 0; i < catFoodContainer.length; i++ ){
    if (catFoodContainer[i] > 0 ){
      catFoodContainerTotal.push(parseInt(catFoodContainer[i]));
    }
   }
   var catFoodContainerSum = catFoodContainerTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catBowls.length; i++ ){
    if (catBowls[i] > 0 ){
      catBowlsTotal.push(parseInt(catBowls[i]));
    }
   }
    var catBowlsSum = catBowlsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catCollars.length; i++ ){
    if (catCollars[i] > 0 ){
      catCollarsTotal.push(parseInt(catCollars[i]));
    }
   }
    var catCollarsSum = catCollarsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitter.length; i++ ){
    if (catLitter[i] > 0 ){
      catLitterTotal.push(parseInt(catLitter[i]));
    }
   }
   var catLitterSum = catLitterTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitterBox.length; i++ ){
    if (catLitterBox[i] > 0 ){
      catLitterBoxTotal.push(parseInt(catLitterBox[i]));
    }
   }
   var catLitterBoxSum = catLitterBoxTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitterScooper.length; i++ ){
    if (catLitterScooper[i] > 0 ){
      catLitterScooperTotal.push(parseInt(catLitterScooper[i]));
    }
   }
   var catLitterScooperSum = catLitterScooperTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catToys.length; i++ ){
    if (catToys[i] > 0 ){
      catToysTotal.push(parseInt(catToys[i]));
    }
   }
   var catToysSum = catToysTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catMedicine.length; i++ ){
    if (catMedicine[i] > 0 ){
      catMedicineTotal.push(parseInt(catMedicine[i]));
    }
   }
   var catMedicineSum = catMedicineTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catGrooming.length; i++ ){
    if (catGrooming[i] > 0 ){
      catGroomingTotal.push(parseInt(catGrooming[i]));
    }
   }
   var catGroomingSum = catGroomingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catCarrier.length; i++ ){
    if (catCarrier[i] > 0 ){
      catCarrierTotal.push(parseInt(catCarrier[i]));
    }
   }
   var catCarrierSum = catCarrierTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catClothing.length; i++ ){
    if (catClothing[i] > 0 ){
      catClothingTotal.push(parseInt(catClothing[i]));
    }
   }
   var catClothingSum = catClothingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTreats.length; i++ ){
    if (catTreats[i] > 0 ){
      catTreatsTotal.push(parseInt(catTreats[i]));
    }
   }
   var catTreatsSum = catTreatsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catBedding.length; i++ ){
    if (catBedding[i] > 0 ){
      catBeddingTotal.push(parseInt(catBedding[i]));
    }
   }
   var catBeddingSum = catBeddingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTower.length; i++ ){
    if (catTower[i] > 0 ){
      catTowerTotal.push(parseInt(catTower[i]));
    }
   }
   var catTowerSum = catTowerTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catScratchingPost.length; i++ ){
    if (catScratchingPost[i] > 0 ){
      catScratchingPostTotal.push(parseInt(catScratchingPost[i]));
    }
   }
   var catScratchingPostSum = catScratchingPostTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTraining.length; i++ ){
    if (catTraining[i] > 0 ){
      catTrainingTotal.push(parseInt(catTraining[i]));
    }
   }
   var catTrainingSum = catTrainingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLodging.length; i++ ){
    if (catLodging[i] > 0 ){
      catLodgingTotal.push(parseInt(catLodging[i]));
    }
   }
   var catLodgingSum = catLodgingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catSitter.length; i++ ){
    if (catSitter[i] > 0 ){
      catSitterTotal.push(parseInt(catSitter[i]));
    }
   }
   var catSitterSum = catSitterTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catVeterinary.length; i++ ){
    if (catVeterinary[i] > 0 ){
      catVeterinaryTotal.push(parseInt(catVeterinary[i]));
    }
   }
   var catVeterinarySum = catVeterinaryTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i <= catHouseModifications.length; i++ ){
    if (catHouseModifications[i] > 0){
      catHouseModificationsTotal.push(parseInt(catHouseModifications[i]));
    }
   }
   var catHouseModificationsSum = catHouseModificationsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catPurchase.length; i++ ){
    if (catPurchase[i] > 0 ){
      catPurchaseTotal.push(parseInt(catPurchase[i]));
    }
   }
   var catPurchaseSum = catPurchaseTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catsInFamily.length; i++ ){
    if (catsInFamily[i] > 0 ){
      catsInFamilyTotal.push(parseInt(catsInFamily[i]));
    }
   }
   var catsInFamilySum = catsInFamilyTotal.reduce(function (a, b) {
     return a + b;
   });



   var catCostsTotal = [
     catFoodSum,
     catFoodContainerSum,
     catBowlsSum,
     catCollarsSum,
     catLitterSum,
     catLitterBoxSum,
     catLitterScooperSum,
     catToysSum,
     catMedicineSum,
     catGroomingSum,
     catCarrierSum,
     catClothingSum,
     catTreatsSum,
     catBeddingSum,
     catTowerSum,
     catScratchingPostSum,
     catTrainingSum,
     catLodgingSum,
     catSitterSum,
     catVeterinarySum,
     catHouseModificationsSum,
     catPurchaseSum
   ];

   var catCostsTotalSum = catCostsTotal.reduce(function (a, b) {
     return a + b;
   });





$('ol').append('<h2 class="message">Total Cats in the Family: '+ catsInFamilySum +'</h2>');
   $('ol').append('<p class="message"> Average cats per family: '+Number((catsInFamilySum/catsInFamilyTotal.length).toFixed(4))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Costs: $'+ catCostsTotalSum +'</h3>');
   $('ol').append('<p class="message">Average Total Cost per cat: $'+Number((catCostsTotalSum/catsInFamilySum).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Food: $'+ catFoodSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catFoodSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catFoodSum/catFoodTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Food Container: $'+ catFoodContainerSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catFoodContainerSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catFoodContainerSum/catFoodContainerTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Bowls: $'+ catBowlsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catBowlsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catBowlsSum/catBowlsTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Litter: $'+ catLitterSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catLitterSum/catLitterTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Litter Box: $'+ catLitterBoxSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterBoxSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catLitterBoxSum/catLitterBoxTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Litter Scooper: $'+ catLitterScooperSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterScooperSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catLitterScooperSum/catLitterScooperTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Toys: $'+ catToysSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catToysSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catLitterScooperSum/catLitterScooperTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Medicine: $'+ catMedicineSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catMedicineSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catMedicineSum/catMedicineTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Grooming: $'+ catGroomingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catGroomingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catGroomingSum/catGroomingTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Carrier: $'+ catCarrierSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catCarrierSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catCarrierSum/catCarrierTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Clothing: $'+ catClothingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catClothingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catClothingSum/catClothingTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Treats: $'+ catTreatsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTreatsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catTreatsSum/catTreatsTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Bedding: $'+ catBeddingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catBeddingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catBeddingSum/catBeddingTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Tower: $'+ catTowerSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTowerSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catTowerSum/catTowerTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Scratching Post: $'+ catScratchingPostSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catScratchingPostSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catScratchingPostSum/catScratchingPostTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Training: $'+ catTrainingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTrainingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catTrainingSum/catTrainingTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Lodging: $'+ catLodgingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLodgingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catLodgingSum/catLodgingTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Sitter: $'+ catSitterSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catSitterSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catSitterSum/catSitterTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Veterinary: $'+ catVeterinarySum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catVeterinarySum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catVeterinarySum/catVeterinaryTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat House Modifications: $'+ catHouseModificationsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catHouseModificationsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per Year: $'+Number((catHouseModificationsSum/catHouseModificationsTotal.length).toFixed(2))+'</p>');

   $('ol').append('<h3 class="message">Total Cat Purchase: $'+ catPurchaseSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catPurchaseSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<p class="message">Average Cost per cat purchased: $'+Number((catPurchaseSum/catPurchaseTotal.length).toFixed(2))+'</p>');


}

function errData(err) {
  console.log('Error!');
  console.log(err);


}
