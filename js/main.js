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

const readMoreButtons = document.querySelectorAll('.read-more-button');
const readLessButtons = document.querySelectorAll('.read-less-button');

readMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.portfolio-card');

        const readLessButton = card.querySelector('.read-less-button')
        const readMoreButton = card.querySelector('.read-more-button')
        const readMoreContents = card.querySelector('.read-more');

        readMoreContents.style.display = 'unset';
        readMoreButton.style.display = 'none';
        readLessButton.style.display = 'unset';
    });
});


readLessButtons.forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.portfolio-card');

        const readMoreButton = card.querySelector('.read-more-button')
        const readLessButton = card.querySelector('.read-less-button')
        const readMoreContents = card.querySelector('.read-more');
        readMoreContents.style.display = 'none';
        readMoreButton.style.display = 'unset';
        readLessButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    const toggleButton = document.querySelector('.toggle-projects-button');
    const cardsToShow = 6;
    let isExpanded = false;

    // Initial hide of extra cards
    portfolioCards.forEach((card, index) => {
        if (index >= cardsToShow) {
            card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    });

    // Toggle button functionality
    toggleButton.addEventListener('click', () => {
        isExpanded = !isExpanded;
        
        portfolioCards.forEach((card, index) => {
            if (index >= cardsToShow) {
                card.style.display = isExpanded ? 'flex' : 'none';
            }
        });

        toggleButton.textContent = isExpanded ? 'Show Less Projects' : 'Show More Projects';
    });
});