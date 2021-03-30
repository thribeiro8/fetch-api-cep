const cep = document.querySelector('#cep');

const showData = (result) => {
  for (const res in result) {
    if (document.querySelector('#' + res)) {
      document.querySelector('#' + res).value = result[res];
    }
  }
};

cep.addEventListener('blur', (e) => {
  let trace = cep.value.replace('-', '');
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };

  fetch(`http://viacep.com.br/ws/${trace}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log(`Ocorreu o erro: ` + e.message));
});
