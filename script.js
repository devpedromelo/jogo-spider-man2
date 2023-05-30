//===================menu=======================
const menuBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
});

//=================fixando a navbar=================
const navbar = document.getElementById("nav")
const btnTopLink = document.querySelector(".top-link")

window.addEventListener("scroll", function(){
    const navHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }

    if(scrollHeight > 700){
        btnTopLink.classList.add("show-link")
    }else{
        btnTopLink.classList.remove("show-link")
    }
});

//=============levando ao elemento certo============
//=======selecionando os links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = e.target.getAttribute("href");
        const element = document.querySelector(id);
        const elementHeight = element.offsetTop;

        //=======calculando a altura
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = elementHeight - navHeight;

        if(!fixedNav){
            position = position - navHeight
        }

        if(navHeight > 82){
            position = position + containerHeight
        }

        window.scrollTo({
            top: position,
        });
        linksContainer.style.height = 0
    });
});

//======================implementando o scroll reveal=====================
// window.sr = ScrollReveal({reset:true});
// sr.reveal(".animate__animated", {duration: 1200});
// sr.reveal("#teorias img", {duration: 1200});