import { initScrollToTop } from "./module/scroll-to-top.js";
import { initNav } from "./module/nav.js";
import { initMainSlider } from "./module/main-slider.js";
import { initObserver } from "./module/observer.js";
import { initPopup } from "./module/popup.js";
import { initStickyHeader } from "./module/sticky-header.js";
import { initMobileMenu } from "./module/mobile-menu.js";
import { initAccordion } from "./module/accordion.js";
import { initProjectSlider } from "./module/projectSlider.js";
import { initSertificateSlider } from "./module/sertificateSliders.js";
import { initNavLinks } from "./module/navLink.js";




window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initScrollToTop();
    initMainSlider();
    initObserver();
    initPopup();
    initStickyHeader();
    initMobileMenu();
    initNav();
    initAccordion();
    initProjectSlider();
    initSertificateSlider();
    initNavLinks();

});
