function removeMensage() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    const spanDelete = span[index];
    spanDelete.remove();
  }
}

function createMensage() {
  const father = document.querySelector('#carta-gerada');
  const inputMensage = document.querySelector('#carta-texto');
  let mensage = inputMensage.value;
  let mensageClear = '';
  removeMensage();
  if (inputMensage.value !== '') {
    for (let index = 0; index < mensage.length; index += 1) {
      if (mensage[index] !== ' ') {
        mensageClear += mensage[index];
      } else {
        const mensageSpan = document.createElement('span');
        mensageSpan.innerText = `${mensageClear}`;
        father.appendChild(mensageSpan);
        mensageClear = '';

      }
    }
    const mensageSpan = document.createElement('span');
    mensageSpan.innerText = `${mensageClear}`;
    father.appendChild(mensageSpan);
  } else {
    alert('Por favor, digite o conteúdo da carta.')
  }
}

const buttonCreate = document.querySelector('#criar-carta');
buttonCreate.addEventListener('click', createMensage);
