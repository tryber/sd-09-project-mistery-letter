const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

button.addEventListener('click', () => {
  const word = input.value;
  if (word.length === 0) {
    const message = document.createElement('p');
    message.className = 'messageError';
    message.innerText = 'Por favor, digite o conteúdo da carta.';
    paragraph.appendChild(message);
  } else {
    const newWords = word.split(' ');
    for (let index = 0; index < newWords.length; index += 1) {
      const span = document.createElement('span');
      paragraph.appendChild(span);
      span.innerText = newWords[index];
    }
  }
});
