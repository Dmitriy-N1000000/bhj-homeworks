const countDown = function() {
	let seconds = document.getElementById('timer');
	seconds.textContent -= 1;

	if (seconds.textContent < 0) {
		clearInterval(timerID);
		alert('Вы победили в конкурсе!');
		seconds.textContent = 0;
	}
}

let timerID = setInterval(countDown, 1000);