const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

function errorMessage() {
  const spanMessage = document.createElement('span');
  paragraph.appendChild(spanMessage);
  spanMessage.id = 'error-message';
  button.addEventListener('click', function () {
    const inputContent = input.value;
    if (inputContent.match(/^\s*$/)) { // Nada ou espaço vazio
      spanMessage.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      spanMessage.innerHTML = '';
      // const messageError = document.querySelector('#error-message');
      // messageError.parentNode.removeChild(messageError);
    }
  });
}
errorMessage();

function getWord() {
  button.addEventListener('click', function () {
    const wordString = (input.value);
    if (!wordString.match(/^\s*$/)) {
      const wordsArray = wordString.split(' ');
      for (let index = 0; index < wordsArray.length; index += 1) {
        const span = document.createElement('span');
        span.innerHTML = wordsArray[index];
        paragraph.appendChild(span);
      }
    }
  });
}
getWord();
