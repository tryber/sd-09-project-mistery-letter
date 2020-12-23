const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');

function errorMessage() {
  button.addEventListener('click', function () {
    const inputContent = input.value;
    //const spanMessage = document.createElement('span');
    //spanMessage.id = 'error-message';
    if (inputContent.match(/^\s*$/)) { // Nada ou espaço vazio
     alert('Por favor, digite o conteúdo da carta.');
      // spanMessage.innerHTML = 'Por favor, digite o conteúdo da carta.';
      // paragraph.appendChild(spanMessage);
    } else {
        getWord();
    }
    //   const messageError = document.querySelector('#error-message');
    //   messageError.parentNode.removeChild(messageError);
    // }
  });
}
errorMessage();

function getWord() {
  button.addEventListener('click', function () {
    const wordString = (input.value);
    const wordsArray = wordString.split(' ');
    for (let index = 0; index < wordsArray.length; index += 1) {
      const span = document.createElement('span');
      span.innerHTML = wordsArray[index];
      paragraph.appendChild(span);
    }
  });
}
getWord();
