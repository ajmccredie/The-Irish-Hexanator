//function for inputting name

let name = prompt();


//function for maths.random to use 3 arrays to give three results

function gentext() {
    
    let phraseListOne = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

    let firstPhrase = document.getElementById('firstResult');

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}


//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays

//function needed that takes the three results and adds them together

function add(firstPhrase, secondPhrase, thirdPhrase) {
    return firstPhrase+secondPhrase+thirdPhrase;   
}

alert(add (0+1+2));


//function needed to reload or reset the page


