const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

button.addEventListener('click', () => {
  const word = input.value;
  if (word.length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragraph.innerHTML = '';
    const newWords = word.split(' ');
    for (let index = 0; index < newWords.length; index += 1) {
      const span = document.createElement('span');
      paragraph.appendChild(span);
      span.innerText = newWords[index];
    }
  }
});
