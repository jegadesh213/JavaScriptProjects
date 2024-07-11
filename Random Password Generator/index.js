function randomPassword(isLowerCase, isUppercase, isChar, isNumber, passwordLength) {
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char = "!@#$%^&*()_-+=";
    let number = "1234567890";
    let combined = "";
    let password = "";

    combined += isLowerCase ? lowerCase : "";
    combined += isUppercase ? upperCase : "";
    combined += isChar ? char : "";
    combined += isNumber ? number : "";

    console.log(combined);

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * combined.length);
        password += combined[index];
    }

    return password;
}

let size = document.getElementById("box").value;
let passwordLength = size;
let showcase = document.getElementById("generatedPasscode");
let isLowerCase = true;
let isUppercase = true;
let isChar = true;
let isNumber = true;

function Generate(){
    let Generatedpassword = randomPassword(isLowerCase, isUppercase, isChar, isNumber, passwordLength);
    console.log(Generatedpassword);
    showcase.Inner = `YOUR GENERATED PASSWORD IS ${Generatedpassword}`
}