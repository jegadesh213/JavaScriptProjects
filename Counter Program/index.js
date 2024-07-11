const increaseID = document.getElementById("increase");
const decreaseID = document.getElementById("decrease");
const resetID = document.getElementById("reset");
const numID = document.getElementById("number");
let count = 0;

increaseID.onclick = function(){
    numID.textContent = count++;
}

decreaseID.onclick = function(){
    numID.textContent = count--;
}

resetID.onclick = function(){
    count = 0;
    numID.textContent = 0;
}