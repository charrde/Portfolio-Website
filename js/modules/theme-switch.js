const themes = {
	light: ['light', 'pink-light', 'blue-light'],
	dark: ['dark', 'pink-dark', 'blue-dark']
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

export function initThemeToggle() {
	document.addEventListener('DOMContentLoaded', () => {
		const themeToggleButtons = document.querySelectorAll('.theme-toggle');
		const storedTheme = localStorage.getItem('theme') || 'light';
		const baseTheme = getBaseTheme(storedTheme);
		
		document.documentElement.setAttribute('data-theme', baseTheme);
		localStorage.setItem('theme', baseTheme);

		themeToggleButtons.forEach(button => {
			button.addEventListener('click', () => {
				const currentTheme = document.documentElement.getAttribute('data-theme');
				const newTheme = toggleThemeVariant(currentTheme);
				document.documentElement.setAttribute('data-theme', newTheme);
				localStorage.setItem('theme', newTheme);
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
		});
	});
}

