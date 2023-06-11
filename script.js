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

document.addEventListener("DOMContentLoaded", function () {
  const testimony = document.querySelectorAll(".testimonial");
  let current = 0;
  testimony[current].style.display = "block";
  function changeTestimony() {
    testimony[current].style.display = "none";
    current = (current + 1) % testimony.length;
    testimony[current].style.display = "block";
  }
  setInterval(changeTestimony, 3000);
});

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


let section = document.querySelector('.numbers');
let stat = document.querySelectorAll('.stats .sta');
let start = false;

window.onscroll = function() {
  if (window.scrollY >= section.offsetTop) {
    if(!start) {
      stat.forEach((sta) => startCount(sta))
    }
    start = true
  }
}
function startCount(el) {
  let max = el.dataset.max;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == max) {
      clearInterval(count);
    }
  }, 2000 / stat);
}


