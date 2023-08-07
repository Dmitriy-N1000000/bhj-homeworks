const textarea = document.getElementById("editor");

textarea.value = localStorage.text;
textarea.oninput = () => localStorage.text = textarea.value;