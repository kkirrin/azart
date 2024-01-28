export const initProjectSlider = () => {
    const itemSlider = function () {
        const item = document.querySelector('.project-item');
        console.log(innerWidth)
        let swiper;
        if (item) {
            swiper = new Swiper(item, {
                loop: true,
                direction: 'horizontal',
                spaceBetween: 15,


                // If we need pagination
                navigation: {
                  nextEl: '.next-slide',
                  prevEl: '.prev-slide', 
                },

            });
        }
    };

    itemSlider();
}