window.addEventListener('DOMContentLoaded', () => {
  const barres = document.querySelectorAll('.remplissage');
  
  barres.forEach(barre => {
    const targetWidth = barre.getAttribute('data-width'); 
    barre.style.width = '0'; 
    setTimeout(() => {
      barre.style.width = targetWidth;
    }, 100);
  });
});