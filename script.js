const validateInput = function (text) {
  const finalText = text.trim();
  if (finalText.length == 0) {
    return false;
  }
  return true;
};

const splitText = function (text) {
  const letter = text.split(' ');
  return letter;
};

function handleClickButton() {
  const inputText = document.getElementById('carta-texto').value;
  console.log(inputText);
  const pElement = document.getElementById('carta-gerada');
  const validInput = validateInput(inputText);
  console.log(validInput);
  if (validInput) {
    const letter = splitText(inputText);
    for (let index = 0; index < letter.length; index += 1) {
      const spanElement = document.createElement('span');
      spanElement.className = 'word';
      spanElement.innerText = letter[index];
      pElement.appendChild(spanElement);
    }
  } else {
    const spanElement = document.createElement('span');
    spanElement.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

const createLetter = function () {
  const buttonElement = document.getElementById('criar-carta');
  buttonElement.addEventListener('click', handleClickButton);
};

window.onload = function () {
  createLetter();
};