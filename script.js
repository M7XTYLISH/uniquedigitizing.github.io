tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      }
    }
  }

}



ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.anim-1, .anim-3, anim-4, .anim-5, .anim-10', { origin: 'top' });
ScrollReveal().reveal('.anim-2, .anim-6, .anim-7, .anim-8, .anim-10', { origin: 'bottom' });
ScrollReveal().reveal('.anim-12, .anim-11', { origin: 'left' });
ScrollReveal().reveal('.anim-9, .anim-13', { origin: 'right' });
