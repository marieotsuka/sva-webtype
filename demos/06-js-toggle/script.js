
console.log('Hello');

//set up the element that triggers my function
let trigger = document.getElementById('button');

//set up the event listener for clicking on the trigger
trigger.addEventListener('click', function(){
	//what happens on click
	console.log('darkmode button clicked!');
	document.body.classList.toggle('darkmode');
});

// function functionName(){

// }