const btn=document.getElementById("btn");
const quote=document.getElementById("quote");
const author=document.getElementById("author");
var readdata=""
var quotesdata=""
const newQuotes=()=>{
    let rnum=Math.floor(Math.random()*5);
    quotesdata=readdata[rnum];
    quote.innerHTML=`${quotesdata.text}`;
    author.innerHTML=`${quotesdata.author}`;
}

const getQuotes= async()=>{
    const read=await fetch("https://type.fit/api/quotes");
     readdata=await read.json();
    newQuotes();


} 
getQuotes();

btn.addEventListener("click",newQuotes);

