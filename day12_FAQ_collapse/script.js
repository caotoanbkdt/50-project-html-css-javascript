const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
});
