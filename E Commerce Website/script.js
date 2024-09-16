// Script for navigation bar

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

// Navbar script

if(bar){
    bar.addEventListener("click", (e) => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}

// Sproduct Image Changer Script
        
smallimg[0].addEventListener("click", function(){
    MainImg.src = smallimg[0].src;
})
smallimg[1].addEventListener("click", function(){
    MainImg.src = smallimg[1].src;
})
smallimg[2].addEventListener("click", function(){
    MainImg.src = smallimg[2].src;
})
smallimg[3].addEventListener("click", function(){
    MainImg.src = smallimg[3].src;
})
       