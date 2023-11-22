const menu = document.querySelector('#menubar');
const mynav = document.querySelector(".navbar");
const myUser = document.querySelector('#user');
const myForm = document.querySelector(".search-form");
const mySearch = document.querySelector('#search');
const searchBar = document.querySelector(".searchbar");

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	mynav.classList.toggle('active');
}
myUser.onclick = () => {
	myForm.classList.toggle('active');
}
mySearch.onclick = () => {
	searchBar.classList.toggle('active');
}


// Glowing flower 


// Get the canvas and image element
const canvas = document.getElementById('glowingCanvas');
const image = document.getElementById('glowingImage');

// Set canvas size to match the image size after the image is loaded
image.onload = function () {
	canvas.width = image.width;
	canvas.height = image.height;

	const ctx = canvas.getContext('2d');
	ctx.willReadFrequently = true; // Set willReadFrequently to true

	// Apply transparent background
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Apply glow effect
	function applyGlowEffect() {
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const data = imageData.data;

		const glowColor = [255, 255, 255]; // RGB values for the glow color

		for (let i = 0; i < data.length; i += 4) {
			// Increase the RGB values to create a glowing effect
			data[i] = Math.min(data[i] + glowColor[0], 255); // Red channel
			data[i + 1] = Math.min(data[i + 1] + glowColor[1], 255); // Green channel
			data[i + 2] = Math.min(data[i + 2] + glowColor[2], 255); // Blue channel
		}

		// Put the modified image data back on the canvas
		ctx.putImageData(imageData, 0, 0);
	}

	// Call the function to apply the glow effect
	applyGlowEffect();

	// Optional: Set an interval to repeatedly apply the glow effect
	setInterval(() => {
		applyGlowEffect();
	}, 5000); // Adjust the interval as needed
};