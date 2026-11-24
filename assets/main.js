// Sticky nav
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll); onScroll();

// Mobile menu
const burger = document.getElementById('burger'), links = document.getElementById('links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Reveal on scroll + skill bars
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      e.target.querySelectorAll('.bar').forEach(b => b.classList.add('on'));
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox
const lb = document.getElementById('lb'), lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
document.querySelectorAll('img.zoom').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src; lbCap.textContent = img.alt; lb.classList.add('open');
  });
});
const close = () => lb.classList.remove('open');
lb.addEventListener('click', e => { if (e.target !== lbImg) close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

document.getElementById('yr').textContent = new Date().getFullYear();
