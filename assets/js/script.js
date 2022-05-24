//These variables are 'const' because/to ensure they won't change.
const FIRST_PHRASE = document.getElementById("firstResult");
const SECOND_PHRASE = document.getElementById("secondResult");
const THIRD_PHRASE = document.getElementById("thirdResult");

// **** ELEMENT DISABLE CODE ****
const NAME_ELEMENT = document.getElementById("name");

let phraseListOne = [
  "will",
  "shall always",
  "is cursed to",
  "will forever",
  "is destined to",
  "is fated to",
];
let phraseListTwo = [
  "be covered in",
  "be imprisoned in",
  "be chained to a",
  "be infected with",
  "be haunted by",
];
let phraseListThree = [
  "a mountain of Banshee poop!",
  "buckets of Leprechaun spittle!",
  "the Divil's fire for all eternity!",
  "a lake of boiling stout!",
  "an ocean of poison whiskey for infinity!",
  "rotten potatoes for ten years!",
];

let phraseListIndexMap = [phraseListOne, phraseListTwo, phraseListThree];
let phraseElementIndexMap = [FIRST_PHRASE, SECOND_PHRASE, THIRD_PHRASE];

/*const stopButton = document.getElementsByClassName('button');
const input = document.getElementById('name');
*/

let generateCurse = function (e) {
  if (!checkName()) {
    return;
  }

  let buttonIndex = parseInt(e.target.dataset.index) - 1;
  generateText(buttonIndex);

  // **** ELEMENT DISABLE CODE ****
  CURSE_BUTTONS.forEach((button) => (button.classList.add("disabled")));

  if (buttonIndex != 2) {
    CURSE_BUTTONS[buttonIndex + 1].classList.remove("disabled");
    } else {
      buttonFinal.classList.remove("disabled");
    }
};

const CURSE_BUTTONS = Array.from(document.getElementsByClassName("curse-button"));
CURSE_BUTTONS.forEach((button) => button.addEventListener("click", generateCurse)
);



let generateText = function (index) {
  let phraseList = phraseListIndexMap[index];
  let phrase = phraseList[Math.floor(Math.random() * phraseList.length)];

  let phraseElement = phraseElementIndexMap[index];
  phraseElement.innerHTML = phrase;
};

// **** ELEMENT DISABLE CODE ****
let startGame = function () {
  CURSE_BUTTONS.forEach((button) => (button.classList.add("disabled")));
  buttonFinal.classList.add("disabled");
 };

// **** ELEMENT DISABLE CODE ****
NAME_ELEMENT.addEventListener("focusout", () =>
  CURSE_BUTTONS[0].classList.remove("disabled")
);



 //const buttonOne = document.getElementById('firstButton')
 //buttonOne.addEventListener('click', (e) => {

 // if (checkName()) {

 //   }
 //       else gentextOne()
 //});

// const buttonTwo = document.getElementById('secondButton')
// buttonTwo.addEventListener('click', (e) => {
//     console.log('This is the event target:', e.target)

//     if (checkName()) {
//         /*console.log('checked for blank and found text')*/

//     }
//     else gentextTwo()
// });

// const buttonThree = document.getElementById('thirdButton')
// buttonThree.addEventListener('click', (e) => {
//     console.log('This is the event target:', e.target)

//     if (checkName()) {
//         /*console.log('checked for blank and found text')*/

//     }
//     else gentextThree()
// });

const buttonFinal = document.getElementById("finalButton");
buttonFinal.addEventListener("click", (e) => {
  
  if (checkName()) {
    genHex();
  }

});

function checkName() {
  if (document.getElementById("name").value !== "") {
    
    return true;
  } 

  alert("please enter your Nemesis' name");
  return false;
}

const refreshPage = document.getElementById("refresh");
refreshPage.addEventListener("click", (e) => {
  document.location.reload();
});

/*
const button = document.getElementsById('firstButton') 
button.addEventListener('click', (e) => {

    if (value === "") {
        
    button.disabled == true;
    }

    else {
    button.disabled == false;
    }

});
    function checkName() {
    
    if (document.getElementById("name").value == '') {
    alert("please enter your Nemesis' name")
    return false;
    }};
*/

/*if (checkName) === true; {
        e.preventDefault();
    }*/

/*const name == document.getElementById('name');
const errorElement == document.getElementById('error');

Form.addEventListner('button',  (e) => {

let x = []
if (name.value === '' ¦¦ name.value == null) {

    Messages.push('Nemesis name is required')
}

If (messages.length > 0) {

    e.preventDefault()

    errorElement.innerText = messages.join(', ')
})*/

//These functions are needed to extract the values from 3 arrays to give three random results.

// function gentextOne() {

//     let phraseListOne = ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"];

//     FIRST_PHRASE.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
// }

// function gentextTwo() {

//     let phraseListTwo = ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"];

//     SECOND_PHRASE.innerHTML = phraseListTwo[Math.floor(Math.random()*phraseListTwo.length)];
// }

// function gentextThree() {

//     let phraseListThree = ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "an ocean of poison whiskey for infinity!", "rotten potatoes for ten years!"];

//     THIRD_PHRASE.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
// }

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays?

//This function takes the value of the input value (name) and the three 'curses' then adds them together to make a full sentence (the 'Hex').

function genHex() {
  let finalPhrase = document.getElementById("finalResult");
  let name = document.getElementById("name").value;

  finalPhrase.innerHTML = `${name} ${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
}

/*function genGIF() {
    
    if (document.getElementById("genHex").value == true) {
        alert("genGIF")
        return true;
}};*/

/*function EnableDisable(name) {
    //Reference the Button.
    var firstbutton = document.getElementsByClassName("button");

    //Verify the TextBox value.
    if (name.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        firstbutton.disabled = false;
    } else {
        //Disable the TextBox when TextBox is empty.
        button.disabled = true;
    }
};*/
