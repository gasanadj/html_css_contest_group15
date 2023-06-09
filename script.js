document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  slides[currentSlide].style.display = "block";
  function changeSlides() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  setInterval(changeSlides, 5000);
});

// function changeBg() {
//   var scrollValue = window.scrollY;
//   const nav = document.getElementById('logo');
//   const links = document.querySelectorAll('a');
//   if (scrollValue > 50) {
//     nav.style.background = '#fff';
//     nav.style.boxShadow = '0 5px 5px -3px rgba(0,0,0,.15)'
//     nav.style.color = '#2b8e8e'
//     for (let i = 0; i<links.length; i++) {
//       links[i].style.color = '#2b8e8e'
//     }
//   }
//   else {
//     nav.style.background = '#000001';
//     nav.style.background =  'linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5))';
//     nav.style.boxShadow = 'none'
//     nav.style.color = '#fff'
//     for (let i = 0; i<links.length; i++) {
//       links[i].style.color = '#fff'
//     }
//   }
// }

//window.addEventListener('scroll', changeBg)

const mainMenu = document.querySelector('nav > ul');
const open = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
open.addEventListener('click', show);
closeMenu.addEventListener('click', hide);
window.addEventListener('resize', handleResize);

function show() {
  mainMenu.style.display = 'flex';
  setTimeout(function () {
    mainMenu.style.top = '0';
  }, 10);
  open.style.display = 'none';
  closeMenu.style.display = 'block';
  closeMenu.style.color= '#2b8e8e';
}

function hide() {
  mainMenu.style.top = '-100%';
  setTimeout(function () {
    mainMenu.style.display = 'none';
  }, 1000);
  closeMenu.style.display = 'none';
  open.style.display = 'block';
  open.style.color = '#2b8e8e'
}

function handleResize() {
  if (window.innerWidth > 800) {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    open.style.display = 'none';
    closeMenu.style.display = 'none';
  } else {
    mainMenu.style.display = 'none';
    mainMenu.style.top = '-100%';
    open.style.display = 'block';
    closeMenu.style.display = 'none';
  }
}

