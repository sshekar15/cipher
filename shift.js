// Add event listener to the button with id "process"
document.getElementById("process").addEventListener("click", processText); 

function processText() {
    // gets the user input, shift amount, and direction from the page
    const input = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const direction = document.getElementById("direction").value;

    // Call the Caesar cipher function and display the result
    const result = caesarCipher(input, shift, direction);
    document.getElementById("result").textContent = result;
}

function caesarCipher(text, shift, direction) {
    const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let shiftValue = shift;

    // Adjust shift direction based on user choice
    if (direction === "decrypt") {
        shiftValue = -shiftValue;
    }

    for (let i = 0; i < text.length; i++) {  //loop that itierates through tex to change each letter 1 by 1
        let char = text[i];

        if (alphabetLower.includes(char)) {
            let newIndex = (alphabetLower.indexOf(char) + shiftValue + 26) % 26;
            result += alphabetLower[newIndex];
        } else if (alphabetUpper.includes(char)) {
            let newIndex = (alphabetUpper.indexOf(char) + shiftValue + 26) % 26;
            result += alphabetUpper[newIndex];
        } else {
            result += char; // Keep non-alpha characters unchanged
        }
    }

    return result;
}
