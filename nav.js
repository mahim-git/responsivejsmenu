const navLink = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const first = document.querySelector('.one')
const second = document.querySelector('.two')
const third = document.querySelector('.three')

hamburger.addEventListener('click', ()=>{
    navLink.classList.toggle('open');
    first.classList.toggle('first');
    second.classList.toggle('second');
    third.classList.toggle('third');
});
