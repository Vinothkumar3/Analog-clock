const hours=document.getElementById("hour")
const minutes=document.getElementById("minute")
const seconds=document.getElementById("second")

function clock(){
 const date=new Date();
 let hh=date.getHours();
 let mm=date.getMinutes();
 let ss=date.getSeconds();
 
 let hRotation=30*hh+mm/2;
 let mRotation=6*mm;
 let sRotation=6*ss;

 hours.style.transform=`rotate(${hRotation}deg)`;
 minutes.style.transform=`rotate(${mRotation}deg)`;
 seconds.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(clock,1000)