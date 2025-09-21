// IntersectionObserver pentru animatii
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// Slider JS
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
  if(i < 0) index = slides.length - 1;
  else if(i >= slides.length) index = 0;
  else index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

// Auto slide la fiecare 5 sec
setInterval(() => showSlide(index + 1), 5000);

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));
