import { toggleMenu, hideMenuOnClick } from './modules/dropdown-toggle.js';
import { initThemeToggle } from './modules/theme-switch.js';
import { initScrollEffect } from './modules/shrinking-header.js';
import { initDynamicText } from './modules/dynamic-text.js';
import { initCarousel } from './modules/carousel.js';

initCarousel();
toggleMenu();
hideMenuOnClick();
initThemeToggle();
initScrollEffect();
initDynamicText();