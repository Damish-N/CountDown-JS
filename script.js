const daysE1 = document.getElementById('days'); 
const hoursE1 = document.getElementById('hours'); 
const minsE1 = document.getElementById('mins'); 
const secondsE1 = document.getElementById('seconds'); 
const newYears = "1 Jan 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const mins = (Math.floor(seconds / 60)) %60;
    const sec = Math.floor (seconds %60);
    // console.log(days,hours,mins,sec);
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minsE1.innerHTML = mins;
    secondsE1.innerHTML = sec;
}

function form(time){
    return time < 10 ? '0$(time)':time;
}
countdown();
setInterval(countdown,1000);
