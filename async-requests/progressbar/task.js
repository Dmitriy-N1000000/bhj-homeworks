const progress = document.getElementById('progress');
const url = 'https://students.netoservices.ru/nestjs-backend/upload';


document.forms.form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', ev => {
        progress.value = ev.loaded / ev.total;
	 });
	
	 xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE) {
			progress.value = 0.0;
		}
	})

    xhr.open('POST', url);
    const formData = new FormData(document.forms.form);
    xhr.send(formData);
})