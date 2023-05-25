//===================menu=======================
const menuBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linkHeight}px`
    }else{
        linksContainer.style.height = 0
    }
});

//================fixando a navbar==========================
const navbar = document.querySelector("#nav")
const btnToUp = document.querySelector('.top-link')
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 500){
        btnToUp.classList.add("show-link")
    }else{
        btnToUp.classList.remove("show-link")
    }
});