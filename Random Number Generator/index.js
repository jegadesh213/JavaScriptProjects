let rollID = document.getElementById("roll")
let labelID = document.getElementById("number")
let max=6
let min=1
let randomnNumber = 0;

rollID.onclick = function(){
    randomnNumber = Math.floor(Math.random() * max)+min;
    labelID.textContent = randomnNumber;
}