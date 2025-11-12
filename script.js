
const WA_NUMBER = '5542999114157';

document.addEventListener('DOMContentLoaded', function () {

  // Hamburger menu
  const btnHamburger = document.getElementById('btn-hamburger');
  const mainNav = document.getElementById('main-nav');

  btnHamburger.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    this.classList.toggle('open');
    this.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a nav link (mobile)
  document.querySelectorAll('.main-nav a').forEach(a => {
    a.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        btnHamburger.classList.remove('open');
        btnHamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Filtering
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const productCards = Array.from(document.querySelectorAll('.product-card'));
  const grid = document.getElementById('grid-products');

  function setActiveFilter(btn) {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function filterProducts(filter) {
    productCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      setActiveFilter(btn);
      filterProducts(filter);
      // accessibility: move focus to grid
      grid.focus?.();
    });
  });

  // Smooth scroll (anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        if (mainNav.classList.contains('open')) mainNav.classList.remove('open');
        const offset = 70; // header height offset
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ===== ABRIR IMAGEM AMPLIADA NO MODAL =====
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.querySelector('.modal-close');

productCards.forEach(card => {
  const img = card.querySelector('img');

  if (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.stopPropagation(); // impede abrir WhatsApp
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  }
});

// Fechar modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


    // also allow Enter key to activate (accessibility)
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Floating WhatsApp button -> use general message already in href in HTML
  // (if you want to override it with WA_NUMBER from config, we can update the href here)
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat && WA_NUMBER && WA_NUMBER !== 'SEUNUMERO') {
    // keep the visible text from HTML but update href to use configured WA_NUMBER
    const encodedDefaultMsg = encodeURIComponent('Olá, tenho interesse nos produtos de crochê');
    whatsappFloat.setAttribute('href', `https://wa.me/${WA_NUMBER}?text=${encodedDefaultMsg}`);
  } else {
    // if WA_NUMBER not replaced, do nothing (remind to replace)
    // (the HTML contains a href with SEUNUMERO too; replace both)
  }


