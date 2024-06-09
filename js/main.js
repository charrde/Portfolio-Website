const button = document.querySelector('.menu');
const navigation = document.querySelector('.nav');

button.addEventListener('click', () => {
    navigation.classList.toggle('show-nav');
});

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

document.addEventListener('scroll', function() {
	const headerCenterContainer = document.querySelector('header .center-container');
	const innerContainer = document.querySelector('header .inner-container');
	if (window.scrollY > 50) {
		headerCenterContainer.classList.add('shrink');
		innerContainer.classList.add('shrink');
	} else {
		headerCenterContainer.classList.remove('shrink');
		innerContainer.classList.remove('shrink');
	}
});


document.addEventListener('DOMContentLoaded', (event) => {
	const dynamicText = document.getElementById('occupation');
	const phrases = ['Software Developer', 'Full-Stack Developer', 'Web Designer', 'Mod Developer', 'Game Developer'];
	let index = 0;
	let isDeleting = false;
	let currentText = '';
	let charIndex = 0;
	let isPaused = false;
	let typingTimeout;

	function type() {
		if (isPaused) return;

		const fullText = phrases[index];
		if (isDeleting) {
			currentText = fullText.substring(0, charIndex - 1);
			charIndex--;
		} 
		else {
			currentText = fullText.substring(0, charIndex + 1);
			charIndex++;
		}

		dynamicText.textContent = currentText;

		if (!isDeleting && charIndex === fullText.length) {
			setTimeout(() => {
				isDeleting = true;
				type();
			}, 500);
		} 
		else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			index = (index + 1) % phrases.length;
			type();
		} 
		else {
			const typingSpeed = isDeleting ? 50 : 100;
			typingTimeout = setTimeout(type, typingSpeed);
		}
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (isPaused) {
					isPaused = false;
					type();
				}
			} 
			else {
				isPaused = true;
				clearTimeout(typingTimeout);
			}
		});
	});

	observer.observe(dynamicText);
	type();
});

