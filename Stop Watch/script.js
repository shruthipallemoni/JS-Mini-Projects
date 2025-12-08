
document.getElementById("start").addEventListener("click",()=>{
    startClock();
})
document.getElementById("stop").addEventListener("click",()=>{
    stopClock();
})
document.getElementById("reset").addEventListener("click",()=>{
    resetClock();
})
function padStart(value){
    return String(value).padStart(2,"0");
}
let secondsElapsed=0;
let interval=null;
const time=document.getElementById("time")
function setTime(){
    const minutes=Math.floor(secondsElapsed/60)
    const seconds=secondsElapsed%60
    time.innerHTML=`${padStart(minutes)}:${padStart(seconds)}`
}
function timer(){
    secondsElapsed++;
    setTime();
}
function startClock(){
    if(interval==null)
        interval=setInterval(timer,1000);
}
function stopClock(){
    clearInterval(interval);
    interval = null; 
}
function resetClock(){
    stopClock();      
    secondsElapsed = 0;
    setTime();
}