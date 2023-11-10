const menu = document.querySelector('#menubar');
const mynav = document.querySelector(".navbar");
const myUser = document.querySelector('#user');
const myForm = document.querySelector(".search-form");

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	mynav.classList.toggle('active');
}
myUser.onclick = () => {
	myForm.classList.toggle('active');
}