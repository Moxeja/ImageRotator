var lastClickedImage = null;

document.body.addEventListener('mousedown', function(e) {
	if (e.target.matches('img') && e.button === 2) {
		lastClickedImage = e.target;
	}
});

chrome.runtime.onMessage.addListener(request => {
	if (lastClickedImage) {
		lastClickedImage.style.transform = 'rotate(' + request.deg + 'deg)';
	}
});
