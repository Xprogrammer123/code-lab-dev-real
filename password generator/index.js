function createPassword(length) {
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    const passwordBox = document.getElementById('password');
    passwordBox.value = password;
}


const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_-+=}{[]><?'|\/";

const allChars = upperCase + lowerCase + number + symbol;

// Call the function with the desired length
createPassword(length);

let toolTip = document.querySelector('.tooltip')
function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText(passwordField.value)
      .then(() => {

       toolTip.style.opacity = '1'

        alert("Password copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  }

