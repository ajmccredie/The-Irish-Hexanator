document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById("name");
    const confirmNameButton = document.getElementById("confirmName"); // Ensure this matches your HTML
    const curseButtons = Array.from(document.getElementsByClassName("curse-button"));
    const buttonFinal = document.getElementById("finalButton");
    const sections = document.querySelectorAll('.sections');
    
    // Initially hide all sections except the first and disable all buttons
    sections.forEach((sec, index) => {
        if (index > 0) sec.classList.add('hidden';
    });
    curseButtons.forEach(button => button.classList.add('disabled'));

    // Enable the confirm button when a name is entered
    nameInput.addEventListener('input', function() {
        if (this.value.trim() !== '') {
            confirmNameButton.classList.remove('disabled');
            confirmNameButton.disabled = false; // Enable the confirm button
        } else {
            confirmNameButton.classList.add('disabled');
            confirmNameButton.disabled = true; // Keep the button disabled if no name is entered
        }
    });

    // Functionality to enable first curse section upon confirming the name
    confirmNameButton.addEventListener('click', () => {
        if (nameInput.value.trim() !== '') {
            const firstCurseSection = sections[1]; // Assuming the first curse section is immediately after the name input section
            firstCurseSection.classList.remove('hidden');
            fadeIn(firstCurseSection, 500); // Use your existing fadeIn function for a smooth transition
            // Automatically enable the first curse button as well
            const firstCurseButton = firstCurseSection.querySelector('.curse-button');
            if (firstCurseButton) {
                firstCurseButton.classList.remove('disabled');
                firstCurseButton.disabled = false;
            }
            confirmNameButton.disabled = true; // Optionally disable the confirm button after use
        } else {
            showModalError("Please enter your Nemesis' name"); // Show error if no name is entered
        }
    });

    // Setup button click events
    curseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (!checkName() && index === 0) {
                showModalError("Please enter your Nemesis' name");
                return;
            }
            generateCurse(index); // Adjusted to use the index parameter

            // Show the next section
            if (index < curseButtons.length - 1) { // Check if not the last button
                const nextSection = sections[index + 1];
                nextSection.classList.remove('hidden');
                fadeIn(nextSection, 500);
                nextSection.querySelector('.curse-button').classList.remove('disabled');
            } else {
                // Last button clicked
                buttonFinal.classList.remove('disabled');
                fadeIn(buttonFinal, 500); // Optionally, fade in the final button
            }
        });
    });

    // Final button action
    buttonFinal.addEventListener('click', function() {
        if (!checkName()) {
            showModalError("Please enter your Nemesis' name");
            return;
        }
        genHex();
    });
});

function generateCurse(buttonIndex) {
    const phraseLists = [
        ["will", "shall always", "is cursed to", "will forever", "is destined to", "is fated to"],
        ["be covered in", "be imprisoned in", "be chained to a", "be infected with", "be haunted by"],
        ["a mountain of Banshee poop!", "buckets of Leprechaun spittle!", "the Divil's fire for all eternity!", "a lake of boiling stout!", "an ocean of poison whiskey for infinity!", "rotten potatoes for ten years!"]
    ];
    const resultElement = [document.getElementById('firstResult'), document.getElementById('secondResult'), document.getElementById('thirdResult')][buttonIndex];
    const phrases = phraseLists[buttonIndex];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    resultElement.innerHTML = phrase;
}

function checkName() {
    return document.getElementById("name").value.trim() !== "";
}

function genHex() {
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

function showModalError(message) {
    alert(message); // Simplified for brevity; replace with modal implementation as needed.
}
