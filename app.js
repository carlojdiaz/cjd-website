const slideshow = document.querySelector('.slideshow');
const images = document.querySelectorAll('.slideshow img');


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Counter
let counter = 1;
let size = images[0].clientWidth;
slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button listeners
nextBtn.addEventListener('click',()=>{
    if(counter >= images.length - 1) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slideshow.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideshow.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'lastClone'){
        slideshow.style.transition = "none";
        counter = images.length-2;
        slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if(images[counter].id === 'firstClone'){
        slideshow.style.transition = "none";
        counter = images.length - counter;
        slideshow.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});