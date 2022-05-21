//function for inputting name

//function for maths.random to use 3 arrays to give three results


const secondPhrase = document.getElementById('secondResult');
const thirdPhrase = document.getElementById('thirdResult');
const firstPhrase = document.getElementById('firstResult');

function gentextOne() {
    
    let phraseListOne = ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"];

    firstPhrase.innerHTML = phraseListOne[Math.floor(Math.random()*phraseListOne.length)];
}


//function needed for two more buttons

function gentextTwo() {
    
    let phraseListTwo = ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"];


    secondPhrase.innerHTML = phraseListTwo[Math.floor(Math.random()*phraseListTwo.length)];
}


function gentextThree() {
    
    let phraseListThree = ["Banshee poop", "Leprechaun spittle", "the Divil's fire", "boiling stout", "poison whiskey", "rotten potatoes"];

    thirdPhrase.innerHTML = phraseListThree[Math.floor(Math.random()*phraseListThree.length)];
}

//function needed for splice or slice to remove previously used results from list of phrases or maybe use three speperate arrays

//function needed that takes the three results and adds them together


function genHex() {


    let finalPhrase = document.getElementById('finalResult');
    let name = document.getElementById("name").value;

    finalPhrase.innerHTML = `${name} ${firstPhrase.innerHTML} ${secondPhrase.innerHTML} ${thirdPhrase.innerHTML}`;
}

//within the genHex function consider a For Loop to check that each curse and name has a value?!? Maybe an If Else statement / 

//When I click button (eg phraseOne) I want to make sure it doesn't pick the same phrase twice/again 



/*
    let sentence = document.getElementById('sentence');
    let curse1 = [firstPhrase.innerHTML];
    let curse2 = [secondPhrase.innerHTM];
    let curse3 = [thirdPhrase.innerHTML];

    let result = curse1.concat(" ", curse2, " ", curse3);

    sentence.innerHTML = result;
}

fullPhrase()



/*
    
        let hex = (firstPhrase, secondPhrase, thirdPhrase) 

        return firstPhrase+secondPhrase+thirdPhrase;   
    }

    add()
 */   


//function needed to reload or reset the page


