const hamburger = document.querySelector('.js-hamburger');
const menu = document.querySelector('.js-menu');
const navbar = document.querySelector('.js-navbar');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('is-open');
  navbar.classList.toggle('is-clicked');
})

document.addEventListener('click', function (e) {
  if (!e.target.isSameNode(hamburger)) {
    menu.classList.remove('is-open');
  }
});

const logo = document.querySelector('.js-logo')

window.addEventListener('scroll', function () {
  if (document.body.scrollTop >= 88) {
    navbar.classList.add('add-background');
    logo.classList.add('js-logo-scroll');
  }
  else {
    navbar.classList.remove('add-background');
    logo.classList.remove('.scroll');
  }
});