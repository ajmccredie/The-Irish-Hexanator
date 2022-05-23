//These variables are 'const' because/to ensure they won't change.  
const firstPhrase = document.getElementById('firstResult');
const secondPhrase = document.getElementById('secondResult');
const thirdPhrase = document.getElementById('thirdResult');


/*const stopButton = document.getElementsByClassName('button');
const input = document.getElementById('name');
*/

const button = document.getElementById('firstButton') 
button.addEventListener('click', (e) => {
    console.log('This is the event target:', e.target)

    if (checkForBlank()) {
        console.log('checked for blank and found text')
    }

});


function checkForBlank() {

    if (document.getElementById("name").value !== '') {
    // alert("please enter your Nemesis' name")
        console.log('not blank')
        return true
    } else {
        console.log('blank')
    }
};



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
    function checkForBlank() {
    
    if (document.getElementById("name").value == '') {
    alert("please enter your Nemesis' name")
    return false;
    }};
*/





    /*if (checkForBlank) === true; {
        e.preventDefault();
    }*/


/*const name == document.getElementById('name');
const errorElement == document.getElementById('error');

Form.addEventListner(‘button’,  (e) => {

let x = []
if (name.value === ‘’ ¦¦ name.value == null) {

    Messages.push(‘Nemesis name is required’)
}

If (messages.length > 0) {

    e.preventDefault()

    errorElement.innerText = messages.join(‘, ‘)
})*/


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
    
    let phraseListThree = ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "an ocean of poison whiskey for infinity!", "rotten potatoes for ten years!"];

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays?

//This function takes the value of the input value (name) and the three 'curses' then adds them together to make a full sentence (the 'Hex').

function genHex() {

    let finalPhrase = document.getElementById('finalResult');
    let name = document.getElementById("name").value;

    finalPhrase.innerHTML = `${name} ${firstPhrase.innerHTML} ${secondPhrase.innerHTML} ${thirdPhrase.innerHTML}`;
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



/*Need more logic to prevent the user from picking the same random phrase for each 'curse' again. 
perhaps within the genHex function consider a For Loop to check that each curse and name has a value?!? Maybe an If Else statement 
So, When the user clicks a button (eg phraseOne) I want to make sure it doesn't pick the same phrase twice/again */

//more logic needed so user must input a name or they can't proceed? an If Else or boolean? 

//eventHandler for all buttons?

//function needed to reload or reset the page too. Perhaps on clicking a button for Back to Top