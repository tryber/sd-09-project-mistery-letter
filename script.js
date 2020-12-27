function createLetter() {
  const text = document.querySelector('#carta-texto');
  const listWords = text.value.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  const count = document.querySelector('#carta-contador');
  paragraph.innerText = '';
  if (listWords[0] === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    count.innerText = 0;
  } else {
    for (let index = 0; index < listWords.length; index += 1) {
      count.innerText = listWords.length;
      const span = document.createElement('span');
      span.innerText = listWords[index];
      paragraph.appendChild(span);
    }
  }
}

window.onload = function () {
  const btnCreate = document.querySelector('#criar-carta');
  btnCreate.addEventListener('click', createLetter);
};
