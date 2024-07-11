let instaCheck = document.getElementById("insta");
let utubeCheck = document.getElementById("utube");
let twitterCheck = document.getElementById("twitter");
let p1 = document.getElementById("instaFollow");
let p2 = document.getElementById("utubeFollow");
let p3 = document.getElementById("twitterFollow");
let submit = document.getElementById("submit");

submit.onclick = function(){
    if(instaCheck.checked){
        p1.textContent = `THANKS FOR THE INSTA FOLLOW`
    }
    else if(utubeCheck.checked){
        p2.textContent = `THANKS FOR THE SUBSCRIBE`
    }
    else{
        p3.textContent = `THANKS FOR THE TWITTER FOLLOW`
    }
}
