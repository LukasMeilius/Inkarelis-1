const menuIcon = document.querySelector('.menu-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');
const openApieMus = document.querySelector('.open-apie-mus');
const backToMain = document.querySelector('.back-to-main');
const menuLinks = document.querySelectorAll('.off-screen-menu a');
const logo = document.querySelector('.logo')

// Reset scroll and hide menu when resizing to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.body.style.overflow = 'auto';
    offScreenMenu.classList.remove('active');
  }
});

// Toggle menu on mobile
menuIcon.addEventListener('click', () => {
  const isActive = offScreenMenu.classList.toggle('active');

  if (window.matchMedia('(max-width: 768px)').matches) {
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }
});

logo.addEventListener('click', (e) => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    offScreenMenu.classList.remove('active');
  } 
});

document.addEventListener('DOMContentLoaded', function () {

  openApieMus.addEventListener('click', function (e) {
    e.preventDefault();
    offScreenMenu.classList.add('active-apie-mus');
  });

  backToMain.addEventListener('click', function (e) {
    e.preventDefault();
    offScreenMenu.classList.remove('active-apie-mus');
  });
});

menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute("href");
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});




