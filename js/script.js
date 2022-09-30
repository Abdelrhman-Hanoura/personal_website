const header = document.querySelector("header");

window.addEventListener('scroll' , ()=>{
    header.classList.toggle("sticky" , window.scrollY > 0);
});

const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x'); //To chnage menue icon to X icon
    navbar.classList.toggle('active');
};
menu.onscroll = () =>{
    menu.classList.remove('bx-x'); //To chnage menue icon to X icon
    navbar.classList.remove('active');
};
const sr = ScrollReveal ({
    distance: '25px' ,
    duration: 2500 ,
    reset: true
});

sr.reveal('.home-text' , {delay: 190 , origin:'bottom'});
sr.reveal('.about' , {delay: 200 , origin:'bottom'});
sr.reveal('.services' , {delay: 200 , origin:'bottom'});
sr.reveal('.portfolio' , {delay: 200 , origin:'bottom'});
sr.reveal('.contact' , {delay: 200 , origin:'bottom'});
