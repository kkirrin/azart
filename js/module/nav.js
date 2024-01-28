export const initNav = () => {
    const body = document.querySelector('body');
    console.log('123');

    const mobileMenu = document.querySelector('.mobile-menu')
    const mobileMenuButton = document.querySelector('.btn__menu--mobile')
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', (evt) => {
            menuButton.classList.remove('active');
            menu.classList.remove('is-active');
            body.classList.remove('lock');
        });
    });
    mobileMenuButton.addEventListener('click', (evt) => {
        mobileMenuButton.classList.toggle('active');
        mobileMenu.classList.toggle('is-active');
    })


  

}