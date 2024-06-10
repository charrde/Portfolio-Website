export function initThemeToggle() {
	document.addEventListener('DOMContentLoaded', () => {
		const themeToggleButtons = document.querySelectorAll('.theme-toggle');
		const currentTheme = localStorage.getItem('theme') || 'light';
		document.documentElement.setAttribute('data-theme', currentTheme);

		const initialParticleColor = currentTheme === 'light' ? '#e95d5d' : '#a21616';
		updateParticleColor(initialParticleColor);

		themeToggleButtons.forEach(button => {
			button.addEventListener('click', () => {
				const currentTheme = document.documentElement.getAttribute('data-theme');
				const newTheme = currentTheme === 'light' ? 'dark' : 'light';
				document.documentElement.setAttribute('data-theme', newTheme);
				localStorage.setItem('theme', newTheme);

				const newParticleColor = newTheme === 'light' ? '#e95d5d' : '#a21616';
				updateParticleColor(newParticleColor);
			});
		});
	});
}