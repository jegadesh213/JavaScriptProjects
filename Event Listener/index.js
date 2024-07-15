let box1 = document.getElementById("box1")

box1.addEventListener("click",() => {
    box1.style.backgroundColor = "Red";
    box1.textContent = "😒"
})

box1.addEventListener("mouseover",() => {
     box1.style.backgroundColor = "Yellow";
     box1.textContent = "🙅⚠️"
})

box1.addEventListener("mouseout",() => {
    box1.style.backgroundColor = "#16dd34";
    box1.textContent = "😊"
})

