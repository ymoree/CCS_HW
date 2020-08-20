window.onload = function(){
	/*let header = document.querySelector('header');
	let btn = document.querySelector('.toggle-nav');

	btn.onclick = function(){
		header.classList.toggle('active');
	}*/

	let navigation = document.querySelector('.navigation');
	let burger = document.querySelector('.navigation-icon');

	burger.onclick = function(){
		navigation.classList.toggle('navigation-open');
	}
}
