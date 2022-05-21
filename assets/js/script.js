//function for inputting name

//function for maths.random to use 3 arrays to give three results

function gentextOne() {
    
    let phraseListOne = ["is a", "has always been a", "will never not be a", "smells like a", "looks like a", "sounds like a"];

    let firstPhrase = document.getElementById('firstResult');

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}

gentextOne()


//function needed for two more buttons

function gentextTwo() {
    
    let phraseListTwo = ["massive", "no good", "low down", "stinky", "ridiculous", "foolish"];

    let secondPhrase = document.getElementById('secondResult');

    secondPhrase.innerHTML = phraseListTwo[Math.floor(Math.random()*phraseListTwo.length)];
}

gentextTwo()

function gentextThree() {
    
    let phraseListThree = ["eejit", "son of a gun", "bold boy", "party pooper", "moaner", "silly billy"];

    let thirdPhrase = document.getElementById('thirdResult');

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

gentextThree()

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays

//function needed that takes the three results and adds them together


    /*function add(firstPhrase, secondPhrase, thirdPhrase) {
        return firstPhrase+secondPhrase+thirdPhrase;   
    }

    alert(add (0+1+2));*/


//function needed to reload or reset the page


