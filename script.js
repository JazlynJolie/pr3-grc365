document.querySelectorAll('.timeline-toggle').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('open');
  });
});

const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
