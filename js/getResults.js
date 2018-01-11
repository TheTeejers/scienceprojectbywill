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
  var refCats = database.ref('catCosts');
  var refDogs = database.ref('dogCosts');
  refCatsAndDogs.on('value', gotDataCatsAndDogs, errData);
  // refCats.on('value', gotDataCats, errData);
  // refDogs.on('value', gotDataDogs, errData);
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
    if (catFood[i] !== '' ){
      catFoodTotal.push(parseInt(catFood[i]));
    }
   }
    var catFoodSum = catFoodTotal.reduce(function (a, b) {
     return a + b;
    });


   for (var i = 0; i < catFoodContainer.length; i++ ){
    if (catFoodContainer[i] !== '' ){
      catFoodContainerTotal.push(parseInt(catFoodContainer[i]));
    }
   }
   var catFoodContainerSum = catFoodContainerTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catBowls.length; i++ ){
    if (catBowls[i] !== '' ){
      catBowlsTotal.push(parseInt(catBowls[i]));
    }
   }
    var catBowlsSum = catBowlsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catCollars.length; i++ ){
    if (catCollars[i] !== '' ){
      catCollarsTotal.push(parseInt(catCollars[i]));
    }
   }
    var catCollarsSum = catCollarsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitter.length; i++ ){
    if (catLitter[i] !== '' ){
      catLitterTotal.push(parseInt(catLitter[i]));
    }
   }
   var catLitterSum = catLitterTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitterBox.length; i++ ){
    if (catLitterBox[i] !== '' ){
      catLitterBoxTotal.push(parseInt(catLitterBox[i]));
    }
   }
   var catLitterBoxSum = catLitterBoxTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLitterScooper.length; i++ ){
    if (catLitterScooper[i] !== '' ){
      catLitterScooperTotal.push(parseInt(catLitterScooper[i]));
    }
   }
   var catLitterScooperSum = catLitterScooperTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catToys.length; i++ ){
    if (catToys[i] !== '' ){
      catToysTotal.push(parseInt(catToys[i]));
    }
   }
   var catToysSum = catToysTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catMedicine.length; i++ ){
    if (catMedicine[i] !== '' ){
      catMedicineTotal.push(parseInt(catMedicine[i]));
    }
   }
   var catMedicineSum = catMedicineTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catGrooming.length; i++ ){
    if (catGrooming[i] !== '' ){
      catGroomingTotal.push(parseInt(catGrooming[i]));
    }
   }
   var catGroomingSum = catGroomingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catCarrier.length; i++ ){
    if (catCarrier[i] !== '' ){
      catCarrierTotal.push(parseInt(catCarrier[i]));
    }
   }
   var catCarrierSum = catCarrierTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catClothing.length; i++ ){
    if (catClothing[i] !== '' ){
      catClothingTotal.push(parseInt(catClothing[i]));
    }
   }
   var catClothingSum = catClothingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTreats.length; i++ ){
    if (catTreats[i] !== '' ){
      catTreatsTotal.push(parseInt(catTreats[i]));
    }
   }
   var catTreatsSum = catTreatsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catBedding.length; i++ ){
    if (catBedding[i] !== '' ){
      catBeddingTotal.push(parseInt(catBedding[i]));
    }
   }
   var catBeddingSum = catBeddingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTower.length; i++ ){
    if (catTower[i] !== '' ){
      catTowerTotal.push(parseInt(catTower[i]));
    }
   }
   var catTowerSum = catTowerTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catScratchingPost.length; i++ ){
    if (catScratchingPost[i] !== '' ){
      catScratchingPostTotal.push(parseInt(catScratchingPost[i]));
    }
   }
   var catScratchingPostSum = catScratchingPostTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catTraining.length; i++ ){
    if (catTraining[i] !== '' ){
      catTrainingTotal.push(parseInt(catTraining[i]));
    }
   }
   var catTrainingSum = catTrainingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catLodging.length; i++ ){
    if (catLodging[i] !== '' ){
      catLodgingTotal.push(parseInt(catLodging[i]));
    }
   }
   var catLodgingSum = catLodgingTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catSitter.length; i++ ){
    if (catSitter[i] !== '' ){
      catSitterTotal.push(parseInt(catSitter[i]));
    }
   }
   var catSitterSum = catSitterTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catVeterinary.length; i++ ){
    if (catVeterinary[i] !== '' ){
      catVeterinaryTotal.push(parseInt(catVeterinary[i]));
    }
   }
   var catVeterinarySum = catVeterinaryTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catHouseModifications.length; i++ ){
    if (catHouseModifications[i] !== '' ){
      catHouseModificationsTotal.push(parseInt(catHouseModifications[i]));
    }
   }
   var catHouseModificationsSum = catHouseModificationsTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catPurchase.length; i++ ){
    if (catPurchase[i] !== '' ){
      catPurchaseTotal.push(parseInt(catPurchase[i]));
    }
   }
   var catPurchaseSum = catPurchaseTotal.reduce(function (a, b) {
     return a + b;
   });


   for (var i = 0; i < catsInFamily.length; i++ ){
    if (catsInFamily[i] !== '' ){
      catsInFamilyTotal.push(parseInt(catsInFamily[i]));
    }
   }
   var catsInFamilySum = catsInFamilyTotal.reduce(function (a, b) {
     return a + b;
   });



console.log('your cats', catsInFamilyTotal);
console.log('your ', catsInFamilySum);


$('div').append('<p class="message">Total Cats in the Family: '+ catsInFamilySum +'    Average cats per family: '+Number((catsInFamilySum/inputData.length).toFixed(4))+'</p>');
   $('ol').append('<li><p class="message">Total Cat Food: $'+ catFoodSum +'    Average per cat: $'+Number((catFoodSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Food Container: $'+ catFoodContainerSum +'    Average per cat: $'+Number((catFoodContainerSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Bowls: $'+ catBowlsSum +'    Average per cat: $'+Number((catBowlsSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Litter: $'+ catLitterSum +'    Average per cat: $'+Number((catLitterSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Litter Box: $'+ catLitterBoxSum +'    Average per cat: $'+Number((catLitterBoxSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Litter Scooper: $'+ catLitterScooperSum +'    Average per cat: $'+Number((catLitterScooperSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Toys: $'+ catToysSum +'    Average per cat: $'+Number((catToysSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Medicine: $'+ catMedicineSum +'    Average per cat: $'+Number((catMedicineSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Grooming: $'+ catGroomingSum +'    Average per cat: $'+Number((catGroomingSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Carrier: $'+ catCarrierSum +'    Average per cat: $'+Number((catCarrierSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Clothing: $'+ catClothingSum +'    Average per cat: $'+Number((catClothingSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Treats: $'+ catTreatsSum +'    Average per cat: $'+Number((catTreatsSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Bedding: $'+ catBeddingSum +'    Average per cat: $'+Number((catBeddingSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Tower: $'+ catTowerSum +'    Average per cat: $'+Number((catTowerSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Scratching Post: $'+ catScratchingPostSum +'    Average per cat: $'+Number((catScratchingPostSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Training: $'+ catTrainingSum +'    Average per cat: $'+Number((catTrainingSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Lodging: $'+ catLodgingSum +'    Average per cat: $'+Number((catLodgingSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Sitter: $'+ catSitterSum +'    Average per cat: $'+Number((catSitterSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Veterinary: $'+ catVeterinarySum +'    Average per cat: $'+Number((catVeterinarySum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat House Modifications: $'+ catHouseModificationsSum +'    Average per cat: $'+Number((catHouseModificationsSum/catsInFamilySum).toFixed(2))+'</p></li>');
   $('ol').append('<li><p class="message">Total Cat Purchase: $'+ catPurchaseSum +'    Average per cat: $'+Number((catPurchaseSum/catsInFamilySum).toFixed(2))+'</p></li>');
}




function errData(err) {
  console.log('Error!');
  console.log(err);

  console.log('catfood',catFood);
   console.log('catFoodContainer',catFoodContainer)
   console.log('catBowls', catBowls);
   console.log('catCollars', catCollars);
   console.log('catLitter', catLitter);
   console.log('catLitterBox', catLitterBox);
   console.log('catLitterScooper', catLitterScooper);
   console.log('catToys', catToys);
   console.log('catMedicine', catMedicine);
   console.log('catGrooming', catGrooming);
   console.log('catCarrier', catCarrier);
   console.log('catClothing', catClothing);
   console.log('catTreats', catTreats);
   console.log('catBedding', catBedding);
   console.log('catTower', catTower);
   console.log('catScratchingPost', catScratchingPost);
   console.log('catTraining', catTraining);
   console.log('catLodging', catLodging);
   console.log('catSitter', catSitter);
   console.log('catVeterinary', catVeterinary);
   console.log('catHouseModifications', catHouseModifications);
   console.log('catPurchase', catPurchase);
   console.log(catClothingTotal);
}
