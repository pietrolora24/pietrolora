let current = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % total;
  slides[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current - 1 + total) % total;
  slides[current].classList.add('active');
});
