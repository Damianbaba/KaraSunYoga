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

// const glowCanvas = document.getElementById('glow-canvas');
// const glowImg = document.getElementById('glow-img');
// const ctx = glowCanvas.getContext('2d');

// glowCanvas.width = glowImg.width;
// glowCanvas.height = glowImg.height;

// function drawGlow() {
// 	ctx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);

// 	// Adjust the glow color
// 	ctx.shadowColor = '#ffcc00';
// 	// Adjust the glow size
// 	ctx.shadowBlur = 20;

// 	ctx.drawImage(glowImg, 0, 0, glowCanvas.width, glowCanvas.height);

// 	// Reset shadow settings
// 	ctx.shadowColor = 'transparent';
// 	ctx.shadowBlur = 0;
// }

// function animateGlow() {
// 	drawGlow();
// 	requestAnimationFrame(animateGlow);
// }

// animateGlow();




//  glov 2

// const glowCanvas = document.getElementById('glow-canvas');
// const glowImg = document.getElementById('glow-img');
// const ctx = glowCanvas.getContext('2d');

// glowCanvas.width = glowImg.width;
// glowCanvas.height = glowImg.height;

// let time = 0;

// function drawGlow() {
// 	ctx.clearRect(0, 0, glowCanvas.width, glowCanvas.height);

// 	// Adjust the glow color
// 	ctx.shadowColor = '#ffcc00';
// 	// Adjust the glow size based on a sine wave for a pulsating effect
// 	ctx.shadowBlur = 20 + Math.sin(time) * 5;

// 	ctx.drawImage(glowImg, 0, 0, glowCanvas.width, glowCanvas.height);

// 	// Reset shadow settings
// 	ctx.shadowColor = 'transparent';
// 	ctx.shadowBlur = 0;

// 	// Increase the time for the next frame
// 	time += 0.05;
// }

// function animateGlow() {
// 	drawGlow();
// 	requestAnimationFrame(animateGlow);
// }

// animateGlow();


