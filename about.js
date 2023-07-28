console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const giveCompliment = (event) => {
	event.preventDefault()
	alert('You are way cooler than this cool duck!')
}
let image = document.querySelector('#duck')

image.addEventListener('mouseover', giveCompliment)