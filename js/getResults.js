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
    parseInt(catFood);
    parseInt(catFoodContainer);
    parseInt(catPurchase);

    // $('ol').append('<li><p class="message">Owner Name: '+ catFood +'</p></li>');
  // console.log(inputData);
  }
    $('ol').append('<li><p class="message">Cat in the Family: '+ catsInFamily +'</p></li>');
    $('ol').append('<li><p class="message">Cat Food: '+ catFood +'</p></li>');
    $('ol').append('<li><p class="message">Cat Food Container: '+ catFoodContainer +'</p></li>');
    $('ol').append('<li><p class="message">Cat Food Container: '+ catPurchase +'</p></li>');

    console.log('catfood',catFood);
    console.log(catFoodContainer)
    console.log(catBowls);
    console.log(catCollars);
    console.log(catLitter);
    console.log(catLitterBox);
    console.log(catLitterScooper);
    console.log(catToys);
    console.log(catMedicine);
    console.log(catGrooming);
    console.log(catCarrier);
    console.log(catClothing);
    console.log(catTreats);
    console.log(catBedding);
    console.log(catTower);
    console.log(catScratchingPost);
    console.log(catTraining);
    console.log(catLodging);
    console.log(catSitter);
    console.log(catVeterinary);
    console.log(catHouseModifications);
    console.log(catPurchase);

    // return inputData[i].catsInFamily;

}


function errData(err) {
  console.log('Error!');
  console.log(err);
}
