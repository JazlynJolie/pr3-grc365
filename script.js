document.querySelectorAll('.timeline-toggle').forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('open');
  });
});
