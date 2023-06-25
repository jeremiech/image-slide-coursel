const slides=document.querySelectorAll(".slide")
var current=0
const nextBtn=document.querySelector('.btn-next')
const prevBtn=document.querySelector('.btn-prev')
var maxSLide=slides.length-1
nextBtn.addEventListener('click',()=>{
    current++
   if(maxSLide===current) current=0

    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${(index-current)*100}%)`
    })
})

prevBtn.addEventListener('click',()=>{
    if(current===0) current=maxSLide
    else current--
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${100* (index-current)}%)`
    })
})

