// Load poem from poem.json
fetch('poem.json')
  .then(r => r.json())
  .then(poem => {
    const container = document.getElementById('poem-container');
    const stanzaHTML = poem.stanzas
      .map(s => `<p class="poem__text">${s.replace(/\n/g, '<br>')}</p>`)
      .join('\n');
    container.innerHTML = `
      <h3 class="poem__title">${poem.title}</h3>
      ${stanzaHTML}
      <p class="poem__attribution">— Andreas Schraag</p>
    `;
  });

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

// Sticky nav style on scroll
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Hamburger toggle
burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  navLinks.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close menu on nav link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});
