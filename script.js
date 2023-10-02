
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:'\",.<>?";

const allChars = upperCase + lowerCase + number + symbol;

const previousPasswords = []; //An array to store previous passwords


function createPassword(){
    let password = "";
    password += upperCase [Math.floor(Math.random() * upperCase.length)];
    password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
    password += number [Math.floor(Math.random() * number.length)];
    password += symbol [Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars [Math.floor(Math.random() * allChars.length)];
    }

    if (previousPasswords.includes(password)) { // Check if the new password is in the previousPasswords array
        
        createPassword();// If it's a duplicate, regenerate the password
        return;
    }

    previousPasswords.push(password);// If it's not a duplicate, add it to the previousPasswords array
    
    passwordBox.value = password;
}
A
    

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
}
