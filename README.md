## Project Description

### Overview
The Shift Cipher (Caesar Cipher) project is a simple web-based application designed to encrypt and decrypt text using the Caesar Cipher technique. The Caesar Cipher is one of the oldest and most well-known encryption methods, named after Julius Caesar, who is said to have used it to communicate with his generals. This project provides an easy-to-use interface for users to apply this technique to their messages.

### What It Does
The project allows users to:
1. Encrypt a plain text message by shifting each character forward in the alphabet by a specified number of positions.
2. Decrypt an encrypted message by shifting each character backward in the alphabet by the same number of positions.

### How It Works
- User Input: The user inputs a message, a shift amount, and selects either the "Encrypt" or "Decrypt" option.
- Shift Logic: The application calculates the new positions of each character in the message based on the shift amount, considering whether the character is uppercase or lowercase.
- Output: The processed result (either encrypted or decrypted text) is displayed on the web page.

### Key Features
- Case Sensitivity: The cipher respects the case of the input characters, ensuring that uppercase letters remain uppercase and lowercase letters remain lowercase.
- Non-Alphabetic Characters: The cipher preserves non-alphabetic characters (e.g., spaces, punctuation) unchanged.
- User-Friendly Interface: The web page has a simple input form and a button to process the text, making it easy for users to interact with the tool.

### Technical Details
- HTML: Provides the structure of the web page with input fields for the message, shift amount, and a dropdown for selecting encryption or decryption.
- JavaScript: Contains the logic for the Caesar Cipher, processing each character of the input text according to the shift amount and direction. It handles both uppercase and lowercase letters, converting them appropriately and using ASCII code manipulation to ensure correct shifts.
- Event Handling: The script uses an event listener to trigger the processText() function when the "Process" button is clicked, updating the result on the page dynamically.

### Example Use Cases
- Encrypting a Message: Enter a message like "HELLO" with a shift of 3 and select "Encrypt" to get "KHOOR".
- Decrypting a Message: Enter the encrypted message "KHOOR" with the same shift of 3 and select "Decrypt" to get back "HELLO".

### Summary
This project is a straightforward implementation of the Caesar Cipher, allowing users to experiment with text encryption and decryption in a user-friendly web interface. It's an educational tool for learning basic cryptography concepts and understanding how shifting characters can transform text.
