const menuIcon = document.querySelector('.menu-icon');
const offScreenMenu = document.querySelector('.off-screen-menu');

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

  if (window.matchMedia("(max-width: 768px)").matches) {
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }
});



