import { toggleMenu, hideMenuOnClick } from './modules/dropdown-toggle.js';
import { initThemeToggle, initSecretThemeButton } from './modules/theme-switch.js';
import { initScrollEffect } from './modules/shrinking-header.js';
import { initDynamicText } from './modules/dynamic-text.js';
import { initCarousel } from './modules/carousel.js';

initCarousel();
toggleMenu();
hideMenuOnClick();
initThemeToggle();
initScrollEffect();
initDynamicText();
initSecretThemeButton();

const backToTopButton = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show-back-to-top-button');
    } 
    else {
        backToTopButton.classList.remove('show-back-to-top-button');
    }
});
