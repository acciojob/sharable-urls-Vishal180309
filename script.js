const button = document.getElementById('button');
const urlElement = document.getElementById('url');

button.addEventListener('click', (e) => {
	e.preventDefault();
	const nameInput = document.getElementById('name');
	const yearInput = document.getElementById('year');
	const name = nameInput.value;
	const year = yearInput.value;

	let queryString = '';
	if (name !== '' && year !== '') {
		queryString = `?name=${name}&year=${year}`;
	} else if (name !== '') {
		queryString = `?name=${name}`;
	} else if (year !== '') {
		queryString = `?year=${year}`;
	}

	const baseUrl = 'https://localhost:8080/';
	const newUrl = baseUrl + queryString;
	urlElement.innerText = newUrl;
});
