// ── Lightbox ──────────────────────────────────────────────────────────────────

function openLightbox(item) {
  const img = item.querySelector('img');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Fechar com tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// Fechar com swipe para baixo no celular
(function () {
  var lb = document.getElementById('lightbox');
  var startY = 0;

  lb.addEventListener('touchstart', function (e) {
    startY = e.touches[0].clientY;
  }, { passive: true });

  lb.addEventListener('touchend', function (e) {
    var deltaY = e.changedTouches[0].clientY - startY;
    if (deltaY > 60) closeLightbox(); // swipe para baixo
  }, { passive: true });
})();


// ── Reveal on scroll ──────────────────────────────────────────────────────────

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .timeline-item').forEach(function (el) {
  observer.observe(el);
});
