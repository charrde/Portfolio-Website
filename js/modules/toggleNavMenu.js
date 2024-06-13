export function toggleMenu() {
	const button = document.querySelector('.menu');
	const navigation = document.querySelector('.nav');

	button.addEventListener('click', () => {
		navigation.classList.toggle('show-nav');
	});
}

export function hideMenuOnClick() {
	const navLinks = document.querySelectorAll('.nav ul li a');
	const navigation = document.querySelector('.nav');

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			navigation.classList.remove('show-nav');
		});
	});
}