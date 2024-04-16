let sHand = document.querySelector('.sec');
let mHand = document.querySelector('.min');
let hHand = document.querySelector('.hour');

function setDate() {
    const date = new Date();
    // Seconds
    const sec = date.getSeconds();
    const sDegree = ((sec / 60) * 360 + 90);
    sHand.style.transform = `rotate(${sDegree}deg)`; 
    console.log(sec);
    
    // Minutes
    const min = date.getMinutes();
    const mDegree = ((min / 60) * 360 + 90);
    mHand.style.transform = `rotate(${mDegree}deg)`; 
    console.log(min);
    
    // Hours
    const hour = date.getHours();
    const hDegree = ((hour / 12) * 360 + 90);
    hHand.style.transform = `rotate(${hDegree}deg)`; 

}

setInterval(setDate, 1000)