


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

var petCostsRef = firebase.database().ref('catAndDogCosts')

//listen to submit form

document.getElementById('petForm').addEventListener('submit', submitForm);

//submit form

function submitForm(event){
  event.preventDefault();

//get values

var ownerName = getInputValue('ownerName');
var dogsInFamily = getInputValue('dogsInFamily');
var dogFood = getInputValue('dogFood');
var dogFoodContainer = getInputValue('dogFoodContainer');
var dogBowls = getInputValue('dogBowls');
var dogCollars = getInputValue('dogCollars');
var dogLeash = getInputValue('dogLeash');
var dogWalker = getInputValue('dogWalker');
var dogPoopBags = getInputValue('dogPoopBags');
var dogPooperScooper = getInputValue('dogPooperScooper');
var dogToys = getInputValue('dogToys');
var dogMedicine = getInputValue('dogMedicine');
var dogGrooming = getInputValue('dogGrooming');
var dogCarrier = getInputValue('dogCarrier');
var dogClothing = getInputValue('dogClothing');
var dogTreats = getInputValue('dogTreats');
var dogTraining = getInputValue('dogTraining');
var dogBedding = getInputValue('dogBedding');
var dogHouse = getInputValue('dogHouse');
var dogLodging = getInputValue('dogLodging');
var dogSitter = getInputValue('dogSitter');
var dogVeterinary = getInputValue('dogVeterinary');
var dogHouseModifications = getInputValue('dogHouseModifications');
var dogYardLeash = getInputValue('dogYardLeash');
var dogPurchase = getInputValue('dogPurchase');




savePetCosts(
  ownerName,
  dogsInFamily,
  dogFood,
  dogFoodContainer,
  dogBowls,
  dogCollars,
  dogLeash,
  dogWalker,
  dogPoopBags,
  dogPooperScooper,
  dogToys,
  dogMedicine,
  dogGrooming,
  dogCarrier,
  dogClothing,
  dogTreats,
  dogTraining,
  dogBedding,
  dogHouse,
  dogLodging,
  dogSitter,
  dogVeterinary,
  dogHouseModifications,
  dogYardLeash,
  dogPurchase);

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
    dogsInFamily,
    dogFood,
    dogFoodContainer,
    dogBowls,
    dogCollars,
    dogLeash,
    dogWalker,
    dogPoopBags,
    dogPooperScooper,
    dogToys,
    dogMedicine,
    dogGrooming,
    dogCarrier,
    dogClothing,
    dogTreats,
    dogBedding,
    dogHouse,
    dogLodging,
    dogSitter,
    dogVeterinary,
    dogHouseModifications,
    dogYardLeash,
    dogPurchase){
  var newPetCostsRef = petCostsRef.push();
    newPetCostsRef.set({
      ownerName: ownerName,
      dogsInFamily: dogsInFamily,
      dogFood: dogFood,
      dogFoodContainer: dogFoodContainer,
      dogBowls: dogBowls,
      dogCollars: dogCollars,
      dogLeash: dogLeash,
      dogWalker: dogWalker,
      dogPoopBags: dogPoopBags,
      dogPooperScooper: dogPooperScooper,
      dogToys: dogToys,
      dogMedicine: dogMedicine,
      dogGrooming: dogGrooming,
      dogCarrier: dogCarrier,
      dogClothing: dogClothing,
      dogTreats: dogTreats,
      dogBedding: dogBedding,
      dogHouse: dogHouse,
      dogLodging: dogLodging,
      dogSitter: dogSitter,
      dogVeterinary: dogVeterinary,
      dogHouseModifications: dogHouseModifications,
      dogYardLeash: dogYardLeash,
      dogPurchase: dogPurchase
  });

  //show alert

  document.querySelector('.alert').style.display = 'block';

  //hide alert after three seconds

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'
  },10000);

}











