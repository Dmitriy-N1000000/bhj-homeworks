const span = Array.from(document.getElementsByClassName('rotator__case'));
let counter = 0;

function changeClass() {
	span[counter].classList.toggle('rotator__case_active');
	counter = (counter + 1) % span.length;
	// console.log(counter);
	span[counter].classList.toggle('rotator__case_active');
}

setInterval(changeClass, 1000);