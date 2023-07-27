let countClick = document.getElementById('clicker__counter');
const magnifyingPicture = document.getElementById('cookie');

function increaseClick() {
	countClick.textContent++;

	magnifyingPicture.width = (countClick.textContent % 2) ? 230 : 200;
	magnifyingPicture.height = (countClick.textContent % 2) ? 150 : 130;
}

magnifyingPicture.onclick = increaseClick;

/* let cookie = document.getElementById('cookie');
let countClick = document.getElementById('clicker__counter');

cookie.onclick = function () {
	countClick.textContent++;

	if (countClick.textContent % 2 !== 0) {
		cookie.width = 230;
		cookie.height = 150;
	} else {
		cookie.width = 200;
		cookie.height = 128;
	}
} */ 