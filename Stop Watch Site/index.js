let display = document.getElementById("display");
let timer = null
let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(update,10)
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer)
        elapseTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer)
    startTime = 0;
    elapseTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapseTime = currentTime - startTime;

    let hours = Math.floor(elapseTime / (1000*60*60) );
    let minute = Math.floor(elapseTime / (1000*60)  % 60);
    let seconds = Math.floor(elapseTime / 1000 % 60);
    let milliSeconds = Math.floor(elapseTime %1000 / 10 );

    hours = hours.toString().padStart(2,0)
    minute = minute.toString().padStart(2,0)
    seconds = seconds.toString().padStart(2,0)
    milliSeconds = milliSeconds.toString().padStart(2,0)

    display.textContent = `${hours}:${minute}:${seconds}:${milliSeconds}`
}