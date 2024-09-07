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

window.addEventListener('scroll', checkIfBottom);
window.addEventListener('resize', checkIfBottom);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show-back-to-top-button');
    } 
    else {
        backToTopButton.classList.remove('show-back-to-top-button');
    }
});

function isBottomOfPage() {
	let scrollPosition = window.scrollY;
	let documentHeight = document.documentElement.scrollHeight;
	let windowHeight = window.innerHeight;
	return (windowHeight + scrollPosition >= documentHeight - 1);
}

function checkIfBottom() {
	if (isBottomOfPage()) {
        document.querySelector('#socials').style.visibility = 'hidden';
        document.querySelector('#socials').style.opacity = '0';
	}
    else {
        document.querySelector('#socials').style.visibility = 'visible';
        document.querySelector('#socials').style.opacity = '1';
    }
}

const readMoreButton = document.querySelector('.read-more-button');
const readLessButton = document.querySelector('.read-less-button');

readMoreButton.addEventListener('click', function() {
    const targettedParagraph = readMoreButton.parentElement;
    const readLessButton = targettedParagraph.querySelector('.read-less-button')
    const readMoreContents = targettedParagraph.querySelector('.read-more');
    readMoreContents.style.display = 'unset';
    readMoreButton.style.display = 'none';
    readLessButton.style.display = 'unset';
});

readLessButton.addEventListener('click', function() {
    const targettedParagraph = readLessButton.parentElement;
    const readMoreButton = targettedParagraph.querySelector('.read-more-button')
    const readMoreContents = targettedParagraph.querySelector('.read-more');
    readMoreContents.style.display = 'none';
    readMoreButton.style.display = 'unset';
    readLessButton.style.display = 'none';
});