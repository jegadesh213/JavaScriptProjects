const textBox = document.getElementById("textBox")
const farehn = document.getElementById("toFarehn")
const Celcius = document.getElementById("toCelcius")
let result = document.getElementById("result")
let temp;


function calculate(){
    if(farehn.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "° F"
    }
    else if(Celcius.checked){
        temp = Number(textBox.value)
        temp = (temp - 32) * 5 / 9
        result.textContent = temp.toFixed(1) + "° C"
    }
    else{
        result.textContent = `SELECT A UNIT`
    }
}