burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightbar = document.querySelector('.rightbar');
burger.addEventListener('click', ()=>{
navbar = document.querySelector('.navbar');
    rightbar.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
