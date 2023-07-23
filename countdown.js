const endDate="10 June 2028 10:02 PM";//Correct format for writing date
document.getElementById("endDate").innerHTML=endDate;
const  inputs=document.querySelectorAll("input");

function clock(){
    
const now=new Date();
const end=new Date(endDate);

const diff=(end-now)/1000;//in seconds
console.log(diff);

if(diff<0) return;

const days=Math.floor(diff/3600/24);
const hrs=Math.floor((diff/3600)%24);
const min=Math.floor((diff/60)%60);
const sec=Math.floor(diff%60);
inputs[0].value=days;
inputs[1].value=hrs;
inputs[2].value=min;
inputs[3].value=sec;


};
setInterval(
    ()=>{
        clock()
    },1000
);
