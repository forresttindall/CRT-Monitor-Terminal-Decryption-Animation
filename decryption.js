const texts = [
    ">_Hello I'm Forrest Tindall",
    ">_Developer, Hacker, Engineer & Designer"
];

let loopIndex = 1;
let textIndex = 0;

let element = document.getElementById("code");

function startTypingEffect() {
    let interval = setInterval(() => {
        if (loopIndex === 30) {
            clearInterval(interval);
            element.innerText = texts[textIndex];
            
            // Pause for 2 seconds before moving to the next text
            setTimeout(() => {
                // Move to the next text in the array, or restart if at the end
                textIndex = (textIndex + 1) % texts.length;

                // Reset loopIndex and start typing effect again
                loopIndex = 1;
                startTypingEffect();
            }, 2500); // 2500 milliseconds = 2.5 seconds
            
        } else {
            let wholeString = "";

            for (let index = 0; index < texts[textIndex].length; index++) {
                const charCode = texts[textIndex].charCodeAt(index);

                if (charCode >= 97 && charCode <= 122) {
                    // Lowercase letters
                    wholeString += String.fromCharCode(97 + Math.floor(Math.random() * 26));
                } else if (charCode >= 65 && charCode <= 90) {
                    // Uppercase letters
                    wholeString += String.fromCharCode(65 + Math.floor(Math.random() * 26));
                } else {
                    // Other characters (punctuation, spaces, etc.)
                    wholeString += texts[textIndex][index];
                }
            }
            
            element.innerText = wholeString;
            loopIndex += 1;
        }
    }, 100);
}

// Start the typing effect
startTypingEffect();

