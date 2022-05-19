//function for inputting name


//function for maths.random to use 3 arrays to give three results

function gentext() {
    
    let phraseListOne = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

    let firstPhrase = document.getElementById('firstResult');

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}


//function for splice or slice to remove used results from list of phrases

//function that takes the three results and adds them together

//function to reload or reset the page




let firstOutput = document.getElementById('firstOutput');

let secondButton = document.getElementById('secondButton');

let secondOutput = document.getElementById('secondOutput');

let thirdButton = document.getElementById('thirdButton');

let thirdOutput = document.getElementById('thirdOutput')

