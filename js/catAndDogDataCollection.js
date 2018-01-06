


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
var catsInFamily = getInputValue('catsInFamily');
var dogsInFamily = getInputValue('dogsInFamily');
var catFood = getInputValue('catFood');
var dogFood = getInputValue('dogFood');
var catFoodContainer = getInputValue('catFoodContainer');
var dogFoodContainer = getInputValue('dogFoodContainer');
var catBowls = getInputValue('catBowls');
var dogBowls = getInputValue('dogBowls');
var catCollars = getInputValue('catCollars');
var dogCollars = getInputValue('dogCollars');
var catLitter = getInputValue('catLitter');
var catLitterBox = getInputValue('catLitterBox');
var catLitterScooper = getInputValue('catLitterScooper');
var dogLeash = getInputValue('dogLeash');
var dogWalker = getInputValue('dogWalker');
var dogPoopBags = getInputValue('dogPoopBags');
var dogPooperScooper = getInputValue('dogPooperScooper');
var catToys = getInputValue('catToys');
var dogToys = getInputValue('dogToys');
var catMedicine = getInputValue('catMedicine');
var dogMedicine = getInputValue('dogMedicine');
var catGrooming = getInputValue('catGrooming');
var dogGrooming = getInputValue('dogGrooming');
var catCarrier = getInputValue('catCarrier');
var dogCarrier = getInputValue('dogCarrier');
var catClothing = getInputValue('catClothing');
var dogClothing = getInputValue('dogClothing');
var catTreats = getInputValue('catTreats');
var dogTreats = getInputValue('dogTreats');
var catBedding = getInputValue('catBedding');
var dogBedding = getInputValue('dogBedding');
var catTower = getInputValue('catTower');
var catScratchingPost = getInputValue('catScratchingPost');
var dogHouse = getInputValue('dogHouse');
var catTraining = getInputValue('catTraining');
var catLodging = getInputValue('catLodging');
var dogLodging = getInputValue('dogLodging');
var catSitter = getInputValue('catSitter');
var dogSitter = getInputValue('dogSitter');
var catVeterinary = getInputValue('catVeterinary');
var dogVeterinary = getInputValue('dogVeterinary');
var catHouseModifications = getInputValue('catHouseModifications');
var dogHouseModifications = getInputValue('dogHouseModifications');
var dogYardLeash = getInputValue('dogYardLeash');
var catPurchase = getInputValue('catPurchase');
var dogPurchase = getInputValue('dogPurchase');




savePetCosts(
  ownerName,
  catsInFamily,
  dogsInFamily,
  catFood,
  dogFood,
  catFoodContainer,
  dogFoodContainer,
  catBowls,
  dogBowls,
  catCollars,
  dogCollars,
  catLitter,
  catLitterBox,
  catLitterScooper,
  dogLeash,
  dogWalker,
  dogPoopBags,
  dogPooperScooper,
  catToys,
  dogToys,
  catMedicine,
  dogMedicine,
  catGrooming,
  dogGrooming,
  catCarrier,
  dogCarrier,
  catClothing,
  dogClothing,
  catTreats,
  dogTreats,
  catBedding,
  dogBedding,
  catTower,
  catScratchingPost,
  dogHouse,
  catTraining,
  catLodging,
  dogLodging,
  catSitter,
  dogSitter,
  catVeterinary,
  dogVeterinary,
  catHouseModifications,
  dogHouseModifications,
  dogYardLeash,
  catPurchase,
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
    catsInFamily,
    dogsInFamily,
    catFood,
    dogFood,
    catFoodContainer,
    dogFoodContainer,
    catBowls,
    dogBowls,
    catCollars,
    dogCollars,
    catLitter,
    catLitterBox,
    catLitterScooper,
    dogLeash,
    dogWalker,
    dogPoopBags,
    dogPooperScooper,
    catToys,
    dogToys,
    catMedicine,
    dogMedicine,
    catGrooming,
    dogGrooming,
    catCarrier,
    dogCarrier,
    catClothing,
    dogClothing,
    catTreats,
    dogTreats,
    catBedding,
    dogBedding,
    catTower,
    catScratchingPost,
    dogHouse,
    catTraining,
    catLodging,
    dogLodging,
    catSitter,
    dogSitter,
    catVeterinary,
    dogVeterinary,
    catHouseModifications,
    dogHouseModifications,
    dogYardLeash,
    catPurchase,
    dogPurchase){

  var newPetCostsRef = petCostsRef.push();
    newPetCostsRef.set({
      ownerName: ownerName,
      catsInFamily: catsInFamily,
      dogsInFamily: dogsInFamily,
      catFood: catFood,
      dogFood: dogFood,
      catFoodContainer: catFoodContainer,
      dogFoodContainer: dogFoodContainer,
      catBowls: catBowls,
      dogBowls: dogBowls,
      catCollars: catCollars,
      dogCollars: dogCollars,
      catLitter: catLitter,
      catLitterBox: catLitterBox,
      catLitterScooper: catLitterScooper,
      dogLeash: dogLeash,
      dogWalker: dogWalker,
      dogPoopBags: dogPoopBags,
      dogPooperScooper: dogPooperScooper,
      catToys: catToys,
      dogToys: dogToys,
      catMedicine: catMedicine,
      dogMedicine: dogMedicine,
      catGrooming: catGrooming,
      dogGrooming: dogGrooming,
      catCarrier: catCarrier,
      dogCarrier: dogCarrier,
      catClothing: catClothing,
      dogClothing: dogClothing,
      catTreats: catTreats,
      dogTreats: dogTreats,
      catBedding: catBedding,
      dogBedding: dogBedding,
      catTower: catTower,
      catScratchingPost: catScratchingPost,
      dogHouse: dogHouse,
      catTraining: catTraining,
      catLodging: catLodging,
      dogLodging: dogLodging,
      catSitter: catSitter,
      dogSitter: dogSitter,
      catVeterinary: catVeterinary,
      dogVeterinary: dogVeterinary,
      catHouseModifications: catHouseModifications,
      dogHouseModifications: dogHouseModifications,
      dogYardLeash: dogYardLeash,
      catPurchase: catPurchase,
      dogPurchase: dogPurchase
  });

  //show alert

  document.querySelector('.alert').style.display = 'block';

  //hide alert after three seconds

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'
  },10000);

}











