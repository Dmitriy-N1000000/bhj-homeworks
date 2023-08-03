const interestsMain = document.querySelector('.interests_main');

interestsMain.addEventListener('change', ev => {
	const interestsActive = ev.target.closest('.interest').querySelector('.interests_active');

	if (!ev.target.closest('.interests_active')) {
		const interestChecks = interestsActive.querySelectorAll('.interest__check');

		for (const checkbox of interestChecks) {
			checkbox.checked = ev.target.checked;
		}
	}
})