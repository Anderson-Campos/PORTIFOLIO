const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burger');

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});

AOS.init();

const $html = document.querySelector('html')
const $checkbox = document.querySelector('#chk')
const $checkbox2 = document.querySelector('#chk2')

$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode');
});

$checkbox2.addEventListener('change', function() {
    $html.classList.toggle('dark-mode');
});