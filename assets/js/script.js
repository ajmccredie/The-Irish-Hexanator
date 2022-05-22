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
    
    let phraseListThree = ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "poison whiskey for infinity!", "rotten potatoes for ten years!"];

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays?

//This function takes the value of the input value (name) and the three 'curses' then adds them together to make a full sentence (the 'Hex').

function genHex() {

    let finalPhrase = document.getElementById('finalResult');
    let name = document.getElementById("name").value;

    finalPhrase.innerHTML = `${name} ${firstPhrase.innerHTML} ${secondPhrase.innerHTML} ${thirdPhrase.innerHTML}`;
}

/*Need more logic to prevent the user from picking the same random phrase for each 'curse' again. 
perhaps within the genHex function consider a For Loop to check that each curse and name has a value?!? Maybe an If Else statement 
So, When the user clicks a button (eg phraseOne) I want to make sure it doesn't pick the same phrase twice/again */

//more logic needed so user must input a name or they can't proceed? an If Else or boolean? 

//function needed to reload or reset the page too. Perhaps on clicking a button for 'Back to Top'? 


