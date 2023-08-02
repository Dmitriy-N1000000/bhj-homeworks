let windows = document.getElementById('modal_main');

windows.classList.add('modal_active');

let windowsClose = document.querySelectorAll('.modal__close');
console.log(windowsClose);

let arr = Array.from(windowsClose);
console.log(arr);

for (let element of arr) {
	element.addEventListener('click', () => {
		if (element.closest('div')) {
			element.closest('.modal').classList.remove('modal_active');
		}
	})
}

let btn = document.querySelector('.btn');
let modalSuccess = document.getElementById('modal_success');

btn.addEventListener('click', () => {
	modalSuccess.classList.add('modal_active');
})