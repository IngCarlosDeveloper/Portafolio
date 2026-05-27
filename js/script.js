const header = document.querySelector('.menu');

if (header) {
  const shrinkThreshold = 30;

  window.addEventListener('scroll', () => {
    if (window.scrollY > shrinkThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
