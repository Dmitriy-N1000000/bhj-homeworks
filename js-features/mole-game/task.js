const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let index = 1; index < 10; index += 1) {
	const kill = document.getElementById(`hole${index}`);
	kill.onclick = function () {
		if (kill.className === 'hole hole_has-mole') {
			dead.textContent = +dead.textContent + 1;
		} else {
			lost.textContent = +lost.textContent + 1;
		}

		if (+lost.textContent === 5) {
			alert('Вы проиграли!');
			dead.textContent = 0;
			lost.textContent = 0;
		} else if (+dead.textContent === 10) {
			alert('Победа!');
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}

/* const holes = document.querySelectorAll('.hole'); // псевдо-массив NodeList 
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let hole of holes) {
	hole.onclick = function () {
		if (hole.classList.contains('hole_has-mole')) {
			dead.innerText++;
		} else {
			lost.innerText++;
		}

		if (dead.innerText === '10') {
			alert('Победа!');
			dead.innerText = 0;
			lost.innerText = 0;
		} else if (lost.innerText === '5') {
			alert('Вы проиграли!');
			dead.innerText = 0;
			lost.innerText = 0;
		}
	}
} */ 