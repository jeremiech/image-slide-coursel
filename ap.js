window.onload=randomChoice
const image=document.querySelector("#my-side")
const imageList=new Array('/images/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call.webp','/images/Content-Card-Test-Surface-Laptop-5-Sandstone-02.webp','/images/Content-Card-Test-Surface-Laptop-Go-2-Contextual-Sage.webp','/images/JIC-DPS-CP01.webp')
function randomChoice(){
let randomImage=Math.floor(Math.random()* imageList.length)
image.src=imageList[randomImage]
}