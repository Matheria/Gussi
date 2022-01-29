const accordions = document.querySelectorAll('.services__accordion');

for (const accordion of accordions) {
  accordion.addEventListener('click', function () {
    this.classList.toggle('services__accordion_open');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
};
