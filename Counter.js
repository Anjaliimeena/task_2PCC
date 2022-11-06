setInterval(()=>{
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night= "AM";
    if(hours > 12){
        day_night = "PM";
        hours = hours - 12;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes= "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes +":" + seconds + " " + day_night
});
let CounterValue = document.querySelector("#CounterValue");
let time = document.querySelector("#time");
let counter = 0;
time.addEventListener("click",()=>{
    counter++;
    CounterValue.innerText = counter;
    if(counter%2===0){
        document.getElementById("color").style.backgroundColor = "purple";
        document.getElementById("CounterValue").style.color = "green";
    }
    if(counter%2 !== 0){
        document.getElementById("color").style.backgroundColor = "darkblue";
        document.getElementById("CounterValue").style.color = "red";
    }
});