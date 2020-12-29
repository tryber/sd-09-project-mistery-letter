function submitLetter(phrase) {
  const paragraph = document.querySelector('#carta-gerada');
  const array = phrase.split(' ');
  paragraph.innerText = '';
  for (let index = 0; index < array.length; index += 1) {
    const spanElement = document.createElement('span');
    spanElement.innerText = array[index];
    paragraph.appendChild(spanElement);
  }
}

function verifyPhrase() {
  const inputText = document.querySelector('#carta-texto');
  const button = document.querySelector('#criar-carta');
  button.addEventListener('click', function () {
    if(inputText.value.trim()){
      submitLetter(inputText.value);
    } else {
      submitLetter('Por favor, digite o conteúdo da carta.')
    }
  });
}

verifyPhrase();
