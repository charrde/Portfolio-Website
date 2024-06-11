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
			let isAutoSliding = false;

			let startX, endX;

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
				autoSlideInterval = null;
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
				autoSlideInterval = null;
			}

			function resetAutoSlideTimeout() {
				clearTimeout(autoSlideTimeout);
				autoSlideTimeout = setTimeout(startAutoSlide, resumeDelay);
			}

			function handleSwipe() {
				const swipeDistance = endX - startX;
				if (Math.abs(swipeDistance) > 50) {
					if (swipeDistance > 0) {
						prevSlide();
					} 
					else {
						nextSlide();
					}
					if (window.innerWidth < 800) {
						resetAutoSlideTimeout();
					}
				}
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
				else if (!autoSlideInterval) {
					resetCarousel();
					startAutoSlide();
				}
			});

			slider.addEventListener('touchstart', function(event) {
				startX = event.touches[0].clientX;
			});

			slider.addEventListener('touchmove', function(event) {
				endX = event.touches[0].clientX;
			});

			slider.addEventListener('touchend', function() {
				handleSwipe();
			});

			if (window.innerWidth < 800) {
				console.log('Starting auto slide...');
				startAutoSlide();
			}

			updateCarousel();
		});
	});
}
