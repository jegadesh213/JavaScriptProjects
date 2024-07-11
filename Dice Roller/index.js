function rolling(){
    let numberOfDice = document.getElementById("numberOfDice").value;
    let textResult = document.getElementById("textResult");
    let imageResult = document.getElementById("imageResult");
    let numberArray = [];
    let imageArray = [];

    for(let i=0;i<numberOfDice;i++){
        let value = Math.floor(Math.random() * 6 ) + 1;
        numberArray.push(value);
        imageArray.push(`<img src="dice_images/${value}.png">`);
    }

    textResult.textContent = `The Values are ${numberArray.join(',')}`
    imageResult.innerHTML = imageArray,join();
}