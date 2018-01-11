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
  var dogsInFamily = [];
  var dogFood = [];
  var dogFoodContainer = [];
  var dogBowls = [];
  var dogCollars = [];
  var dogLeash = [];
  var dogWalker = [];
  var dogPoopBags = [];
  var dogPooperScooper = [];
  var dogToys = [];
  var dogMedicine = [];
  var dogGrooming = [];
  var dogCarrier = [];
  var dogClothing = [];
  var dogTreats = [];
  var dogTraining = [];
  var dogBedding = [];
  var dogHouse = [];
  var dogLodging = [];
  var dogSitter = [];
  var dogVeterinary = [];
  var dogHouseModifications = [];
  var dogYardLeash = [];
  var dogPurchase = [];
  var dogsInFamilyTotal = [];
  var dogFoodTotal = [];
  var dogFoodContainerTotal = [];
  var dogBowlsTotal = [];
  var dogCollarsTotal = [];
  var dogLeashTotal = [];
  var dogWalkerTotal = [];
  var dogPoopBagsTotal = [];
  var dogPooperScooperTotal = [];
  var dogToysTotal = [];
  var dogMedicineTotal = [];
  var dogGroomingTotal = [];
  var dogCarrierTotal = [];
  var dogClothingTotal = [];
  var dogTreatsTotal = [];
  var dogTrainingTotal = [];
  var dogBeddingTotal = [];
  var dogHouseTotal = [];
  var dogLodgingTotal = [];
  var dogSitterTotal = [];
  var dogVeterinaryTotal = [];
  var dogHouseModificationsTotal = [];
  var dogYardLeashTotal = [];
  var dogPurchaseTotal = [];


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
    dogsInFamily.push(inputData[i].dogsInFamily);
    dogFood.push(inputData[i].dogFood);
    dogFoodContainer.push(inputData[i].dogFoodContainer);
    dogBowls.push(inputData[i].dogBowls);
    dogCollars.push(inputData[i].dogCollars);
    dogLeash.push(inputData[i].dogLeash);
    dogWalker.push(inputData[i].dogWalker);
    dogPoopBags.push(inputData[i].dogPoopBags);
    dogPooperScooper.push(inputData[i].dogPooperScooper);
    dogToys.push(inputData[i].dogToys);
    dogMedicine.push(inputData[i].dogMedicine);
    dogGrooming.push(inputData[i].dogGrooming);
    dogCarrier.push(inputData[i].dogCarrier);
    dogClothing.push(inputData[i].dogClothing);
    dogTreats.push(inputData[i].dogTreats);
    dogTraining.push(inputData[i].dogTraining);
    dogBedding.push(inputData[i].dogBedding);
    dogHouse.push(inputData[i].dogHouse);
    dogLodging.push(inputData[i].dogLodging);
    dogSitter.push(inputData[i].dogSitter);
    dogVeterinary.push(inputData[i].dogVeterinary);
    dogHouseModifications.push(inputData[i].dogHouseModifications);
    dogYardLeash.push(inputData[i].dogYardLeash);
    dogPurchase.push(inputData[i].dogPurchase);
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

   for (var i = 0; i < dogsInFamily.length; i++ ){
    if (dogsInFamily[i] > 0 ){
      dogsInFamilyTotal.push(parseInt(dogsInFamily[i]));
    }
   }
   var dogsInFamilySum = dogsInFamilyTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogFood.length; i++ ){
    if (dogFood[i] > 0 ){
      dogFoodTotal.push(parseInt(dogFood[i]));
    }
   }
   var dogFoodSum = dogFoodTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogFoodContainer.length; i++ ){
    if (dogFoodContainer[i] > 0 ){
      dogFoodContainerTotal.push(parseInt(dogFoodContainer[i]));
    }
   }
   var dogFoodContainerSum = dogFoodContainerTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogBowls.length; i++ ){
    if (dogBowls[i] > 0 ){
      dogBowlsTotal.push(parseInt(dogBowls[i]));
    }
   }
   var dogBowlsSum = dogBowlsTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogCollars.length; i++ ){
    if (dogCollars[i] > 0 ){
      dogCollarsTotal.push(parseInt(dogCollars[i]));
    }
   }
   var dogCollarsSum = dogCollarsTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogLeash.length; i++ ){
    if (dogLeash[i] > 0 ){
      dogLeashTotal.push(parseInt(dogLeash[i]));
    }
   }
   var dogLeashSum = dogLeashTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogWalker.length; i++ ){
    if (dogWalker[i] > 0 ){
      dogWalkerTotal.push(parseInt(dogWalker[i]));
    }
   }
   var dogWalkerSum = dogWalkerTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogPoopBags.length; i++ ){
    if (dogPoopBags[i] > 0 ){
      dogPoopBagsTotal.push(parseInt(dogPoopBags[i]));
    }
   }
   var dogPoopBagsSum = dogPoopBagsTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogPooperScooper.length; i++ ){
    if (dogPooperScooper[i] > 0 ){
      dogPooperScooperTotal.push(parseInt(dogPooperScooper[i]));
    }
   }
   var dogPooperScooperSum = dogPooperScooperTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogToys.length; i++ ){
    if (dogToys[i] > 0 ){
      dogToysTotal.push(parseInt(dogToys[i]));
    }
   }
   var dogToysSum = dogToysTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogMedicine.length; i++ ){
    if (dogMedicine[i] > 0 ){
      dogMedicineTotal.push(parseInt(dogMedicine[i]));
    }
   }
   var dogMedicineSum = dogMedicineTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogGrooming.length; i++ ){
    if (dogGrooming[i] > 0 ){
      dogGroomingTotal.push(parseInt(dogGrooming[i]));
    }
   }
   var dogGroomingSum = dogGroomingTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogCarrier.length; i++ ){
    if (dogCarrier[i] > 0 ){
      dogCarrierTotal.push(parseInt(dogCarrier[i]));
    }
   }
   var dogCarrierSum = dogCarrierTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogClothing.length; i++ ){
    if (dogClothing[i] > 0 ){
      dogClothingTotal.push(parseInt(dogClothing[i]));
    }
   }
   var dogClothingSum = dogClothingTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogTreats.length; i++ ){
    if (dogTreats[i] > 0 ){
      dogTreatsTotal.push(parseInt(dogTreats[i]));
    }
   }
   var dogTreatsSum = dogTreatsTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogTraining.length; i++ ){
    if (dogTraining[i] > 0 ){
      dogTrainingTotal.push(parseInt(dogTraining[i]));
    }
   }
   var dogTrainingSum = dogTrainingTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogBedding.length; i++ ){
    if (dogBedding[i] > 0 ){
      dogBeddingTotal.push(parseInt(dogBedding[i]));
    }
   }
   var dogBeddingSum = dogBeddingTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogHouse.length; i++ ){
    if (dogHouse[i] > 0 ){
      dogHouseTotal.push(parseInt(dogHouse[i]));
    }
   }
   var dogHouseSum = dogHouseTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogLodging.length; i++ ){
    if (dogLodging[i] > 0 ){
      dogLodgingTotal.push(parseInt(dogLodging[i]));
    }
   }
   var dogLodgingSum = dogLodgingTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogSitter.length; i++ ){
    if (dogSitter[i] > 0 ){
      dogSitterTotal.push(parseInt(dogSitter[i]));
    }
   }
   var dogSitterSum = dogSitterTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogVeterinary.length; i++ ){
    if (dogVeterinary[i] > 0 ){
      dogVeterinaryTotal.push(parseInt(dogVeterinary[i]));
    }
   }
   var dogVeterinarySum = dogVeterinaryTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogHouseModifications.length; i++ ){
    if (dogHouseModifications[i] > 0 ){
      dogHouseModificationsTotal.push(parseInt(dogHouseModifications[i]));
    }
   }
   var dogHouseModificationsSum = dogHouseModificationsTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogYardLeash.length; i++ ){
    if (dogYardLeash[i] > 0 ){
      dogYardLeashTotal.push(parseInt(dogYardLeash[i]));
    }
   }
   var dogYardLeashSum = dogYardLeashTotal.reduce(function (a, b) {
     return a + b;
   });

   for (var i = 0; i < dogPurchase.length; i++ ){
    if (dogPurchase[i] > 0 ){
      dogPurchaseTotal.push(parseInt(dogPurchase[i]));
    }
   }
   var dogPurchaseSum = dogPurchaseTotal.reduce(function (a, b) {
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

   var dogCostsTotal = [
     dogFoodSum,
     dogFoodContainerSum,
     dogBowlsSum,
     dogCollarsSum,
     dogLeashSum,
     dogWalkerSum,
     dogPoopBagsSum,
     dogPooperScooperSum,
     dogToysSum,
     dogMedicineSum,
     dogGroomingSum,
     dogCarrierSum,
     dogClothingSum,
     dogTreatsSum,
     dogTrainingSum,
     dogBeddingSum,
     dogHouseSum,
     dogLodgingSum,
     dogSitterSum,
     dogVeterinarySum,
     dogHouseModificationsSum,
     dogYardLeashSum,
     dogPurchaseSum
   ];

   var dogCostsTotalSum = dogCostsTotal.reduce(function (a, b) {
     return a + b;
   });





$('ol').append('<h2 class="message">Total Cats in the Family: '+ catsInFamilySum +'</h2>');
   $('ol').append('<p class="message"> Average cats per family: '+Number((catsInFamilySum/catsInFamilyTotal.length).toFixed(4))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Costs: $'+ catCostsTotalSum +'</h3>');
   $('ol').append('<p class="message">Average Total Cost per cat: $'+Number((catCostsTotalSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Food: $'+ catFoodSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catFoodSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Food Container: $'+ catFoodContainerSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catFoodContainerSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Bowls: $'+ catBowlsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catBowlsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Litter: $'+ catLitterSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Litter Box: $'+ catLitterBoxSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterBoxSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Litter Scooper: $'+ catLitterScooperSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLitterScooperSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Toys: $'+ catToysSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catToysSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Medicine: $'+ catMedicineSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catMedicineSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Grooming: $'+ catGroomingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catGroomingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Carrier: $'+ catCarrierSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catCarrierSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Clothing: $'+ catClothingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catClothingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Treats: $'+ catTreatsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTreatsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Bedding: $'+ catBeddingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catBeddingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Tower: $'+ catTowerSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTowerSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Scratching Post: $'+ catScratchingPostSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catScratchingPostSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Training: $'+ catTrainingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catTrainingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Lodging: $'+ catLodgingSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catLodgingSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Sitter: $'+ catSitterSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catSitterSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Veterinary: $'+ catVeterinarySum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catVeterinarySum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat House Modifications: $'+ catHouseModificationsSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catHouseModificationsSum/catsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Cat Purchase: $'+ catPurchaseSum +'</h3>');
   $('ol').append('<p class="message">Average per cat: $'+Number((catPurchaseSum/catsInFamilySum).toFixed(2))+'</p><br><br>');
   $('ol').append('<h2 class="message">Total Dogs in the Family: '+ dogsInFamilySum +'</h2>');
   $('ol').append('<p class="message">Average per dogs per family: '+Number((dogsInFamilySum/dogsInFamilyTotal.length).toFixed(4))+'</p>');
   $('ol').append('<h3 class="message">Total dog Costs: $'+ dogCostsTotalSum +'</h3>');
   $('ol').append('<p class="message">Average Total Cost per dog: $'+Number((dogCostsTotalSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Food: $'+ dogFoodSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogFoodSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Food Container: $'+ dogFoodContainerSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogFoodContainerSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Bowls: $'+ dogBowlsSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogBowlsSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Collars: $'+ dogCollarsSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogCollarsSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Leash: $'+ dogLeashSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogLeashSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Walker: $'+ dogWalkerSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogWalkerSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog PoopBags: $'+ dogPoopBagsSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogPoopBagsSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog PooperScooper: $'+ dogPooperScooperSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogPooperScooperSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Toys: $'+ dogToysSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogToysSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Medicine: $'+ dogMedicineSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogMedicineSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Grooming: $'+ dogGroomingSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogGroomingSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Carrier: $'+ dogCarrierSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogCarrierSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Clothing: $'+ dogClothingSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogClothingSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Treats: $'+ dogTreatsSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogTreatsSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Training: $'+ dogTrainingSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogTrainingSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Carrier: $'+ dogCarrierSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogCarrierSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Bedding: $'+ dogBeddingSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogBeddingSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog House: $'+ dogHouseSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogHouseSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Lodging: $'+ dogLodgingSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogLodgingSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Sitter: $'+ dogSitterSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogSitterSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Veterinary: $'+ dogVeterinarySum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogVeterinarySum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog HouseModifications: $'+ dogHouseModificationsSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogHouseModificationsSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog YardLeash: $'+ dogYardLeashSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogYardLeashSum/dogsInFamilySum).toFixed(2))+'</p>');
   $('ol').append('<h3 class="message">Total Dog Purchase: $'+ dogPurchaseSum +'</h3>');
   $('ol').append('<p class="message">Average per dog: $'+Number((dogPurchaseSum/dogsInFamilySum).toFixed(2))+'</p>');

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
