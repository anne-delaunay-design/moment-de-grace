document.addEventListener('DOMContentLoaded', () => {

  // --- Menu mobile ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
    });
  }

  // --- Accordéon FAQ ---
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });


  // --- Boutons "Choisir ce soin" → affiche le bon calendrier ---
  document.querySelectorAll('a[data-cal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const cal = btn.dataset.cal;
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
      if (window.selectCalendar) window.selectCalendar(cal);
    });
  });

  // --- Smooth scroll pour les autres ancres ---
  document.querySelectorAll('a[href^="#"]:not([data-cal])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
