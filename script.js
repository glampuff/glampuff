// ============================
// Scroll animations (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));


// ============================
// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Inchide meniul cand se da click pe un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


// ============================
// Slider produse
const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let index = 0;

// Afiseaza slide-ul curent
function showSlide(i) {
  if(i < 0) index = slides.length - 1;
  else if(i >= slides.length) index = 0;
  else index = i;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Next / Prev buttons
nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

// Auto-slide la fiecare 5 secunde
setInterval(() => showSlide(index + 1), 5000);
