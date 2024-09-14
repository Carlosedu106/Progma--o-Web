// Selecão de elementos
const cepSection = document.querySelector('.cep-section');

const buscaBtn = document.querySelector('#busca-btn');
const cepInput = document.querySelector('.cep-input');

const resultSection = document.querySelector('#result-section');
const resultBody = document.querySelector('.result-body');

const backBtn = document.querySelector('.back-btn');

// Conexão API
const fetchData = async (cep) => {
	const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
	try {
		const response = await fetch(apiUrl);

		const dataJson = await response.json();

		console.log(dataJson);

		updateTable(dataJson);
	} catch (error) {
		console.error('Erro!');
	}
};

// Funções
function clearInput() {
	cepInput.value = '';
}

const updateTable = (data) => {
	const tableContent = `
    <tr>
        <td>${data.cep}</td>
        <td>${data.logradouro}</td>
        <td>${data.bairro}</td>
        <td>${data.localidade}</td>
        <td>${data.estado}</td>
    </tr>`;

	resultBody.innerHTML = tableContent;
};

function showOrHideResult() {
	cepSection.classList.toggle('hide');
	resultSection.classList.toggle('hide');
}

// Eventos
buscaBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const cep = cepInput.value;
	fetchData(cep);

	showOrHideResult();
});

backBtn.addEventListener('click', () => {
	clearInput();
	showOrHideResult();
});
