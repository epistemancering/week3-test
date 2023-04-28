console.log("hello world");
document.querySelector('img').addEventListener('mouseover', function() {
	alert('You have good taste in ducks.')
})
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submitted successfully.');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);