//These variables are 'const' because/to ensure they won't change.  

const secondPhrase = document.getElementById('secondResult');
const thirdPhrase = document.getElementById('thirdResult');
const firstPhrase = document.getElementById('firstResult');

//These functions are needed to extract the values from 3 arrays to give three random results.

function gentextOne() {
    
    let phraseListOne = ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"];

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}

function gentextTwo() {
    
    let phraseListTwo = ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"];

    secondPhrase.innerHTML = phraseListTwo[Math.floor(Math.random()*phraseListTwo.length)];
}


function gentextThree() {
    
    let phraseListThree = ["Banshee poop", "Leprechaun spittle", "the Divil's fire", "boiling stout", "poison whiskey", "rotten potatoes"];

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays?

//This function takes the value of the input value (name) and the three 'curses' then adds them together to make a full sentence (the 'Hex').

function genHex() {

    let finalPhrase = document.getElementById('finalResult');
    let name = document.getElementById("name").value;

    finalPhrase.innerHTML = `${name} ${firstPhrase.innerHTML} ${secondPhrase.innerHTML} ${thirdPhrase.innerHTML}`;
}

//within the genHex function consider a For Loop to check that each curse and name has a value?!? Maybe an If Else statement / 

//When I click button (eg phraseOne) I want to make sure it doesn't pick the same phrase twice/again 


//function needed to reload or reset the page


