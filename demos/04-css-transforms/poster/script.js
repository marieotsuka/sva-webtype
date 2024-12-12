console.log('poster!');

let trigger = document.body;
let squareContainer = document.querySelector('.bluesq');
trigger.addEventListener('click', function(){
	//what happens on click
	console.log('clicked!');

	squareContainer.classList.toggle('animated');
});