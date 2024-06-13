import { toggleMenu, hideMenuOnClick } from './modules/toggleNavMenu.js';
import { initThemeToggle, initSecretThemeButton } from './modules/themeToggle.js';
import { initHeaderShrink } from './modules/headerShrink.js';
import { initDynamicText } from './modules/dynamicText.js';
import { initCarousel } from './modules/carousel.js';
import { initActiveHoverReplace } from './modules/activeHoverReplace.js';
import { initParticles } from './modules/particleConfig.js';

initCarousel();
toggleMenu();
hideMenuOnClick();
initThemeToggle();
initHeaderShrink();
initDynamicText();
initSecretThemeButton();
initActiveHoverReplace();
initParticles();

const backToTopButton = document.querySelector('.back-to-top-button');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show-back-to-top-button');
    } 
    else {
        backToTopButton.classList.remove('show-back-to-top-button');
    }
});