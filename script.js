const filters = document.querySelectorAll('.filter');
const publications = document.querySelectorAll('.publication');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    publications.forEach((item) => {
      item.hidden = selected !== 'all' && item.dataset.kind !== selected;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const navDropdown = document.querySelector('.nav-dropdown');
const moreButton = document.querySelector('.more-button');

if (navDropdown && moreButton) {
  const closeDropdown = () => {
    navDropdown.classList.remove('open');
    moreButton.setAttribute('aria-expanded', 'false');
  };

  moreButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navDropdown.classList.toggle('open');
    moreButton.setAttribute('aria-expanded', String(isOpen));
  });

  navDropdown.querySelectorAll('.dropdown-menu a').forEach((link) => {
    link.addEventListener('click', closeDropdown);
  });

  document.addEventListener('click', (event) => {
    if (!navDropdown.contains(event.target)) closeDropdown();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown();
      moreButton.focus();
    }
  });
}
