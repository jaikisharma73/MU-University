let hamburger = document.querySelector('.hamburger');
let navlist = document.querySelector('.navlist');
let nav = document.querySelector('nav');

hamburger.addEventListener('click',() => {
    navlist.classList.toggle('navlist-active');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}