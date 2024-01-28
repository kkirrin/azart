export const initMobileMenu = () => {
     // Меню
     const mobileMenu = document.querySelector('.mobile-menu');
     const menuButton = document.querySelector('.btn-close-menu');
     const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
 
     menuButton.addEventListener('click', e => {
         menuButton.classList.toggle('active');
         console.log('Клик')
         mobileMenu.classList.toggle('is-active');
         body.classList.toggle('lock');
         console.log('клик')
     });
 
     mobileMenuLinks.forEach(link => {
         link.addEventListener('click', (evt) => {
             evt.preventDefault();
             menuButton.classList.remove('active');
             mobileMenu.classList.remove('is-active');
             body.classList.remove('lock');
         });
     });
}