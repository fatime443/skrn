var slides = document.querySelector('.slider').children;
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var index=0;



prev.addEventListener('click',function(){
   prevSlide()
})
next.addEventListener('click',function(){
   nextSlide()
})



function prevSlide(){
    if(index==0){
        index=slides.length-1
    }
    else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){
        index=0;
    }
    else{
        index++;
    }
    changeSlide();
}
function changeSlide(){
    for(let i=0;i<slides.length;i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active');
}
setInterval(function(){
    nextSlide();
},8000)
