import { refreshParticles } from "./particleConfig.js";

const themes = {
	light: ['light', 'pink-light', 'blue-light', 'green-light', 'purple-light', 'orange-light'],
	dark: ['dark', 'pink-dark', 'blue-dark', 'green-dark', 'purple-dark', 'orange-dark']
};

function getBaseTheme(currentTheme) {
	if (themes.dark.includes(currentTheme)) {
		return 'dark';
	}
	return 'light';
}

function toggleThemeVariant(currentTheme) {
	if (currentTheme.includes('light')) {
		return currentTheme.replace('light', 'dark');
	} else if (currentTheme.includes('dark')) {
		return currentTheme.replace('dark', 'light');
	}
	return currentTheme === 'light' ? 'dark' : 'light';
}

function moveThemeToggleButton() {
	const themeToggleButton = document.querySelector('.switch');
	const parentMobile = document.querySelector('.theme-switch-mobile');
	const parentDesktop = document.querySelector('.theme-switch');
	if (window.innerWidth < 1100) {
		if (!parentMobile.contains(themeToggleButton)) {
			parentDesktop.removeChild(themeToggleButton);
			parentMobile.appendChild(themeToggleButton);
		}
	} 
	else if (window.innerWidth > 1100) {
		if (!parentDesktop.contains(themeToggleButton)) {
			parentMobile.removeChild(themeToggleButton);
			parentDesktop.appendChild(themeToggleButton);
		}
	}
}

export function initThemeToggle() {
	document.addEventListener('DOMContentLoaded', () => {
		const themeToggleButtons = document.querySelectorAll('.theme-toggle');
		const storedTheme = localStorage.getItem('theme') || 'dark';
		const baseTheme = getBaseTheme(storedTheme);

		window.addEventListener('resize', moveThemeToggleButton);
		window.addEventListener('load', moveThemeToggleButton);

		document.documentElement.setAttribute('data-theme', baseTheme);
		localStorage.setItem('theme', baseTheme);
		themeToggleButtons.forEach(button => {
			button.addEventListener('click', () => {
				const currentTheme = document.documentElement.getAttribute('data-theme');
				const newTheme = toggleThemeVariant(currentTheme);
				document.documentElement.setAttribute('data-theme', newTheme);
				localStorage.setItem('theme', newTheme);
				refreshParticles();
			});
		});
	});
}

export function initSecretThemeButton() {
	document.addEventListener('DOMContentLoaded', () => {
		const button = document.querySelector('.secret-themes-button');
		let currentIndex = 0;

		button.addEventListener('click', () => {
			const currentTheme = document.documentElement.getAttribute('data-theme');
			const baseTheme = getBaseTheme(currentTheme);
			const themeList = themes[baseTheme];

			currentIndex = themeList.indexOf(currentTheme);
			const newTheme = themeList[(currentIndex + 1) % themeList.length];

			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			refreshParticles();
		});
	});
}
