export function initCarousel() {
	document.addEventListener('DOMContentLoaded', function() {
		const carousels = [
			{
				sliderId: 'languages-slider',
				prevButtonId: 'languages-prev',
				nextButtonId: 'languages-next'
			},
			{
				sliderId: 'programs-slider',
				prevButtonId: 'programs-prev',
				nextButtonId: 'programs-next'
			}
		];

		carousels.forEach(({ sliderId, prevButtonId, nextButtonId }) => {
			const slider = document.getElementById(sliderId);
			const prevButton = document.getElementById(prevButtonId);
			const nextButton = document.getElementById(nextButtonId);
			const slideTrack = slider.querySelector('.skills-slide-track');
			const slides = slider.querySelectorAll('.skills-slide');
			let currentIndex = 0;
			let autoSlideInterval;
			let autoSlideTimeout;
			const autoSlideDelay = 2000; // 2 seconds
			const resumeDelay = 5000; // 5 seconds
			let isAutoSliding = window.innerWidth < 800;

			function updateCarousel() {
				const width = slides[0].clientWidth;
				slideTrack.style.transform = `translateX(-${currentIndex * width}px)`;
			}

			function resetCarousel() {
				currentIndex = 0;
				slideTrack.style.transition = 'none';
				slideTrack.style.transform = 'none';
				setTimeout(() => {
					slideTrack.style.transition = 'transform 0.5s ease';
				}, 50);
				clearInterval(autoSlideInterval);
			}

			function nextSlide() {
				if (currentIndex < slides.length - 1) {
					currentIndex++;
				} 
				else {
					currentIndex = 0;
				}
				updateCarousel();
			}

			function prevSlide() {
				if (currentIndex > 0) {
					currentIndex--;
				} 
				else {
					currentIndex = slides.length - 1;
				}
				updateCarousel();
			}

			function startAutoSlide() {
				if (!isAutoSliding && window.innerWidth < 800) {
					isAutoSliding = true;
					autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
				}
			}

			function stopAutoSlide() {
				isAutoSliding = false;
				clearInterval(autoSlideInterval);
			}

			function resetAutoSlideTimeout() {
				clearTimeout(autoSlideTimeout);
				autoSlideTimeout = setTimeout(startAutoSlide, resumeDelay);
			}

			prevButton.addEventListener('click', function() {
				if (window.innerWidth < 800) {
					stopAutoSlide();
					prevSlide();
					resetAutoSlideTimeout();
				} 
				else {
					prevSlide();
				}
			});

			nextButton.addEventListener('click', function() {
				if (window.innerWidth < 800) {
					stopAutoSlide();
					nextSlide();
					resetAutoSlideTimeout();
				} 
				else {
					nextSlide();
				}
			});

			window.addEventListener('resize', function() {
				if (window.innerWidth >= 800) {
					stopAutoSlide();
					resetCarousel();
				} 
				else {
					resetCarousel();
					startAutoSlide();
				}
			});

			if (window.innerWidth < 800) {
				startAutoSlide();
			}

			updateCarousel();
		});
	});
}
