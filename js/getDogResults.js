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

  var inputData = [];
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
  for(var x in data.val()) {
    inputData.push(data.val()[x]);
  }
  for (var i = 0; i < inputData.length; i++){
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


}
