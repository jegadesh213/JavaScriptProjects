function updateClock(){
    const clck = new Date();
    const hours = clck.getHours();
    let merdian = hours >= 12 ? "PM" : "AM";
    let hr = hours % 12 || 0;
    hr = hr.toString().padStart(2,0)
    const minute = clck.getMinutes().toString().padStart(2,0);
    const seconds = clck.getSeconds().toString().padStart(2,0);    
    const time = `${hr}:${minute}:${seconds}-${merdian}`;
    
    document.getElementById("clock").textContent = time;

}

updateClock();
setInterval(updateClock,1000)