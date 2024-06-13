export function initHeaderShrink() {
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
}