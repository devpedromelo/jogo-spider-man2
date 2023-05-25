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