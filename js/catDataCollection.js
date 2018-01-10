


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


//referenece petCost collection

var petCostsRef = firebase.database().ref('catAndDogCosts');
// var petCostsRef = firebase.database().ref('catCosts');

//listen to submit form

document.getElementById('petForm').addEventListener('submit', submitForm);

//submit form

function submitForm(event){
  event.preventDefault();

//get values

var ownerName = getInputValue('ownerName');
var catsInFamily = getInputValue('catsInFamily');

var catFood = getInputValue('catFood');
var catFoodContainer = getInputValue('catFoodContainer');
var catBowls = getInputValue('catBowls');
var catCollars = getInputValue('catCollars');
var catLitter = getInputValue('catLitter');
var catLitterBox = getInputValue('catLitterBox');
var catLitterScooper = getInputValue('catLitterScooper');
var catToys = getInputValue('catToys');
var catMedicine = getInputValue('catMedicine');
var catGrooming = getInputValue('catGrooming');
var catCarrier = getInputValue('catCarrier');
var catClothing = getInputValue('catClothing');
var catTreats = getInputValue('catTreats');
var catBedding = getInputValue('catBedding');
var catTower = getInputValue('catTower');
var catScratchingPost = getInputValue('catScratchingPost');
var catTraining = getInputValue('catTraining');
var catLodging = getInputValue('catLodging');
var catSitter = getInputValue('catSitter');
var catVeterinary = getInputValue('catVeterinary');
var catHouseModifications = getInputValue('catHouseModifications');
var catPurchase = getInputValue('catPurchase');




savePetCosts(
  ownerName,
  catsInFamily,
  catFood,
  catFoodContainer,
  catBowls,
  catCollars,
  catLitter,
  catLitterBox,
  catLitterScooper,
  catToys,
  catMedicine,
  catGrooming,
  catCarrier,
  catClothing,
  catTreats,
  catBedding,
  catTower,
  catScratchingPost,
  catTraining,
  catLodging,
  catSitter,
  catVeterinary,
  catHouseModifications,
  catPurchase);

// // clear out form

document.getElementById('petForm').reset();
}

// //get form values

function getInputValue(id) {
  return document.getElementById(id).value;

}

// // save PetCost to firebase

function savePetCosts(
    ownerName,
    catsInFamily,
    catFood,
    catFoodContainer,
    catBowls,
    catCollars,
    catLitter,
    catLitterBox,
    catLitterScooper,
    catToys,
    catMedicine,
    catGrooming,
    catCarrier,
    catClothing,
    catTreats,
    catBedding,
    catTower,
    catScratchingPost,
    catTraining,
    catLodging,
    catSitter,
    catVeterinary,
    catHouseModifications,
    catPurchase,
      ){
  var newPetCostsRef = petCostsRef.push();
    newPetCostsRef.set({
      ownerName: ownerName,
      catsInFamily: catsInFamily,
      catFood: catFood,
      catFoodContainer: catFoodContainer,
      catBowls: catBowls,
      catCollars: catCollars,
      catLitter: catLitter,
      catLitterBox: catLitterBox,
      catLitterScooper: catLitterScooper,
      catToys: catToys,
      catMedicine: catMedicine,
      catGrooming: catGrooming,
      catCarrier: catCarrier,
      catClothing: catClothing,
      catTreats: catTreats,
      catBedding: catBedding,
      catTower: catTower,
      catScratchingPost: catScratchingPost,
      catTraining: catTraining,
      catLodging: catLodging,
      catSitter: catSitter,
      catVeterinary: catVeterinary,
      catHouseModifications: catHouseModifications,
      catPurchase: catPurchase
  });

  //show alert

  document.querySelector('.alert').style.display = 'block';

  //hide alert after three seconds

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'
  },10000);
}










