let dropdownButton = document.querySelectorAll('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');

dropdownButton.forEach(function (el) {
	el.addEventListener('click', function() {
		dropdownButton.forEach(el => {
			if (el !== this) {
				el.nextElementSibling.classList.remove('dropdown__list_active');
			}
		})

		this.nextElementSibling.classList.toggle('dropdown__list_active');
		let dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
		dropdownLink.forEach(elem => {
			// console.log(elem);
			elem.addEventListener('click', ev => {
				ev.preventDefault();
				dropdownList.classList.remove('dropdown__list_active');
				el.textContent = elem.textContent;
			})
		})
	})
})