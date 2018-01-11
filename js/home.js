
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
  var catsInFamilyTotal = [];
  var dogsInFamily = [];
  var dogsInFamilyTotal = [];



// get data
function gotDataCatsAndDogs(data){
  for(var x in data.val()) {
    inputData.push(data.val()[x]);
  }
  for (var i = 0; i < inputData.length; i++){
    catsInFamily.push(inputData[i].catsInFamily);
    dogsInFamily.push(inputData[i].dogsInFamily);

  }


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







  $('section').append('<h3 class="message">Total Submitted Surveys: '+ inputData.length +'</h3>');
   $('section').append('<h3 class="message">Total Submitted Surveys for Cats: '+ catsInFamilyTotal.length +'</h3>');
   $('section').append('<h3 class="message">Total Submitted Surveys for Dogs: '+ dogsInFamilyTotal.length +'</h3>');



}

function errData(err) {
  console.log('Error!');
  console.log(err);


}
