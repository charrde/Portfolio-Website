export function initDynamicText() {
	document.addEventListener('DOMContentLoaded', (event) => {
		const dynamicText = document.getElementById('occupation');
		const phrases = ['Software Developer', 'Full-Stack Developer', 'Web Designer', 'Mod Developer', 'Game Developer'];
		let index = 0;
		let isDeleting = false;
		let charIndex = 0;
		let isPaused = false;
		let typingTimeout;
		let currentText = ''

		function type() {
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
			} else if (isDeleting && charIndex === 0) {
				isDeleting = false;
				index = (index + 1) % phrases.length;
				type();
			} else {
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
				} else {
					isPaused = true;
					clearTimeout(typingTimeout);
				}
			});
		});

		observer.observe(dynamicText);
		type();
	});
}