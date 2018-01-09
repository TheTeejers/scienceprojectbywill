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
  // refCatsAndDogs.on('value', gotDataCatsAndDogs, errData);
  refCats.on('value', gotDataCats, errData);
  // refDogs.on('value', gotDataDogs, errData);

// get data
function gotDataCats(data){
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
    parseInt(catFood[i], 10);
    parseInt(catFoodContainer, 10);
    parseInt(catPurchase, 10);

    // $('ol').append('<li><p class="message">Owner Name: '+ catFood +'</p></li>');
  // console.log(inputData);
  }
  var catPurchaseTotal = [];
  for (var i = 0; i < catPurchase.length; i++ ){

    if (catPurchase[i] !== '' ){

      catPurchaseTotal.push(catPurchase[i]);
    }
    var catfoods = parseInt(catPurchaseTotal[i], 10);
  }
    $('ol').append('<li><p class="message">Cat in the Family: '+ catsInFamily +'</p></li>');
    $('ol').append('<li><p class="message">Cat Food: '+ catFood +'</p></li>');
    $('ol').append('<li><p class="message">Cat Food Container: '+ catFoodContainer +'</p></li>');
    $('ol').append('<li><p class="message">Cat Purchase: '+ catPurchase +'</p></li>');
    parseInt(catFood[i], 10);
    parseInt(catFoodContainer, 10);
    parseInt(catPurchase[i], 10);
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
    console.log(parseInt(catPurchase[2])+parseInt(catPurchase[1]));
    console.log(catFood.length);
    console.log(catfoods);

    // return inputData[i].catsInFamily;

}


function errData(err) {
  console.log('Error!');
  console.log(err);
}
