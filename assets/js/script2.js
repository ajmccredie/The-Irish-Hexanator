document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById("name");
    const confirmNameButton = document.getElementById("confirmName");
    const curseButtons = Array.from(document.getElementsByClassName("curse-button"));
    const buttonFinal = document.getElementById("finalButton");
    const sections = document.querySelectorAll('.sections');
    
    // Initially hide all sections except the first and disable all buttons
    sections.forEach((sec, index) => sec.classList.toggle('hidden', index !== 0));
    curseButtons.forEach(button => button.disabled = true);

    nameInput.addEventListener('input', () => {
        confirmNameButton.disabled = !nameInput.value.trim();
    });

    confirmNameButton.addEventListener('click', () => {
        if (nameInput.value.trim()) {
            const firstCurseSection = sections[1];
            firstCurseSection.classList.remove('hidden');
            fadeIn(firstCurseSection, 500);
            confirmNameButton.disabled = true;
            curseButtons[0].disabled = false;
        } else {
            showModalError("Please enter your Nemesis' name");
        }
    });

    curseButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            generateCurse(index);
            const nextSection = sections[index + 2]; // +2 to skip over the name confirmation section
            if (nextSection) {
                nextSection.classList.remove('hidden');
                fadeIn(nextSection, 500);
                const nextButton = nextSection.querySelector('.curse-button');
                if (nextButton) nextButton.disabled = false;
            } else {
                buttonFinal.disabled = false;
                fadeIn(buttonFinal, 500);
            }
            button.disabled = true; // Disable the button after use
        });
    });

    buttonFinal.addEventListener('click', genHex);
});

function generateCurse(index) {
    const phraseLists = [
        ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"],
        ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"],
        ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "an ocean of poison whiskey for infinity!", "rotten potatoes for ten years!"]
    ];
    const results = ['firstResult', 'secondResult', 'thirdResult'];
    const resultElement = document.getElementById(results[index]);
    const phrases = phraseLists[index];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    resultElement.innerHTML = phrase;
}

function genHex() {
    if (!checkName()) {
        showModalError("Please enter your Nemesis' name");
        return;
    }
    const name = document.getElementById("name").value;
    const finalResult = document.getElementById('finalResult');
    finalResult.innerHTML = `${name} ${FIRST_PHRASE.innerHTML} ${SECOND_PHRASE.innerHTML} ${THIRD_PHRASE.innerHTML}`;
}

function fadeIn(element, duration) {
    element.style.opacity = 0;
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.opacity = Math.min(progress / duration, 1);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

// function showModalError(message) {
//     alert(message); // Simplified for brevity; replace with modal implementation as needed.
// }
