const inputText = document.getElementById('carta-texto');
const buttonLetter = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

function generateletter () {
  buttonLetter.addEventListener('click', function () {
    if (inputText.value === ''|| !inputText.value.trim()) {
      alert('Por favor, digite o conteúdo da carta.');
    } else {
      let text = inputText.value;
      let textSplit = text.split(' ');
      for (let index = 0; index < textSplit.length; index += 1) {
        let span = document.createElement('span');
        span.innerHTML = `${textSplit[index]} `;
        letter.appendChild(span);
      }
    }
  });
}

// functions
generateletter();
