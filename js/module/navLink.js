export const initNavLinks = () => {
    const aside = document.querySelector('aside');
    const menuLinks = document.querySelectorAll('.nav-link');

    if (menuLinks.length > 0) {
        const onMenuLinkClick = (evt) => {
            evt.preventDefault();
            const menuLink = evt.target;
            if (menuLink.dataset.goto) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                if (gotoBlock) {
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - aside.offsetHeight;
                    const offset = 1000; 

                    window.scrollTo({
                        top: gotoBlockValue + offset, 
                        behavior: 'smooth',
                    });
                }
            }
        };

        menuLinks.forEach((menuLink) => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });
    }
};
