const upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let form = document.querySelector(".password-generator__form");
let formIncludeNumbers = form.querySelector("input[name='include-numbers']");
let formIncludeSymbols = form.querySelector("input[name='include-symbols']");
let formPasswordLength = form.querySelector("input[name='password-length']"); 
let formPasswordLengthLabel = form.querySelector("label[for='password-length']");
let formSubmit = form.querySelector(".form__submit");

let passwordOutput1 = document.querySelector(".output__password1");
let passwordOutput2 = document.querySelector(".output__password2");

let arrays = [];
let includeNumbers = true;
let includeSymbols = true;
let passwordLength = formPasswordLength.value;

formPasswordLengthLabel.textContent = "Password Length: " + formPasswordLength.value;

formPasswordLength.addEventListener("input", (event) => {
    formPasswordLengthLabel.textContent = "Password Length: " + event.target.value;
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    includeNumbers = formIncludeNumbers.checked;
    includeSymbols = formIncludeSymbols.checked;
    passwordLength = parseInt(formPasswordLength.value);
    
    passwordOutput1.textContent = generatePassword();
    passwordOutput2.textContent = generatePassword();
})


function generatePassword() {
    let password = "";
    arrays = handleIncludes(); 
    
    for (let i = 0; i < passwordLength; i++ ) {
        password += randomCharacter(randomArray(arrays));
    }
    return password;
}

function handleIncludes() {
    arrays = [numbers, upperLetters, lowerLetters, symbols];
    
    if ( !includeNumbers && !includeSymbols ) {
        arrays.pop()
        arrays.shift();
        return arrays;
    } else if ( !includeNumbers ) {
        arrays.shift();
        return arrays;
    } else if ( !includeSymbols ) {
        arrays.pop();
        return arrays;
    }
    
    return arrays;
}

function randomArray(arrays) {
    let randomIndex = Math.floor( Math.random() * arrays.length );
    return arrays[randomIndex];
}
 
function randomCharacter(array) {
    let randomIndex = Math.floor( Math.random() * array.length );
    return array[randomIndex];
}

