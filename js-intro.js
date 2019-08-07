// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

// var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.

// console.log(mantra.charAt(0));

// 1b. Write the code that determines if there is an 'x' in mantra.

// console.log(mantra.includes('x'));

// 1c. Write the code that determines if there is a 'v' in mantra.

// console.log(mantra.includes('v'));

// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.

// function anyLetter(letter) {
//     var mantra = "Be the dev" 
//   if (mantra.includes(letter)) {
//     return `The string includes ${letter} letter`;
//   } else {
//     return `There is no ${letter} in the string`;
//   }
// }
// console.log(anyLetter("i"));

// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

function longest (myCat,myDog){
  if (myDog.length > myCat.length) {
    console.log(myDog)
  } else {
    console.log(myCat)
  }
}
longest (myCat,myDog);


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

let arr = [myDog, myCat]
console.log(arr);

// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.

function toLowerCase(myDog1,myCat){
console.log(myDog.toLowerCase())
console.log(myCat.toLowerCase())
}



// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for (var i=0; i < myMessage.length; i++){
  console.log(myMessage.charAt(i));
}

// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

var i=0;
while (i < myMessage.length){
  console.log(myMessage.charAt(i));
  i++;
}

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().

arr = myMessage.split("");
arr.forEach(element => {
  console.log(element);
});

// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

function remove(testString){
  var newString = "";
  const vowels = ["i", "a", "e", "u", "o"];
  for (var i=0; i < testString.length; i++){
    if (vowels.includes(testString.charAt(i)) == false ){
      newString = newString + testString.charAt(i)
    }
  }
  return newString
}
console.log(remove(testString))

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

function removeVowels(testString){
  var newString = "";
  if( typeof testString !== "string"){
    console.log("ERROR: " + testString + " is not of type string!");
  } else {
    const vowels = ["i", "a", "e", "u", "o"];
    for (var i=0; i < testString.length; i++){
      if (vowels.includes(testString.charAt(i)) == false ){
        newString = newString + testString.charAt(i)
      }
    }
  }
  return newString
}
console.log(removeVowels(testString))

// ----------------------------------------------
// Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

function findCats(toonimals) {
  var newArray = [];
  for ( var i = 0; i < toonimals.length; i++){
    if (toonimals[i]['animal'] == "cat"){
      newArray.push(toonimals[i]);
    }
  }
  return newArray;
}
console.log(findCats(toonimals));

//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

function findNonCats(toonimals) {
 var newArray = [];
  for ( var i = 0; i < toonimals.length; i++){
    if (toonimals[i]['animal'] !== "cat"){
      newArray.push(toonimals[i]["name"]);
    }
  }
  return newArray;
}
console.log(findNonCats(toonimals));

//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

function nameAnimal(toons){
    for ( var i = 0; i < toons.length; i++){
      console.log(toons[i]["name"] + " is a " + toons[i]["animal"]);
    }
  }
  nameAnimal(toonimals);
