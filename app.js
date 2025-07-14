let hamburger = document.querySelector('.hamburger');
let navlist = document.querySelector('.navlist');

hamburger.addEventListener('click',() => {
    navlist.classList.toggle('navlist-active');
})