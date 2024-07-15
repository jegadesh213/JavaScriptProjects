let box = document.getElementById("box1")
let moveamount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", () =>{
    box.style.backgroundColor = "tomato"
    box.textContent = "😒"
});


document.addEventListener("keyup", () =>{
    box.style.backgroundColor = "#81d077"
    box.textContent = "😁"
});


document.addEventListener("keydown",
    function movement(event){ 
    
        console.log(event.key);
    
        if(event.key.startsWith("Arrow")){
    
            switch(event.key){
                case "ArrowUp":
                    y-=moveamount;
                    break;
                case "ArrowDown":
                    y+=moveamount;
                    break;
                case "ArrowLeft":
                    x-=moveamount;
                    break;
                case "ArrowRight":
                    x+=moveamount;
                    break;
            }
    
            box.style.top = `${y}px`;
            box.style.left = `${x}px`;
        }
    });


