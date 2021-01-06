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

const resetLetter = function () {
  const pElement = document.getElementById('carta-gerada');
  console.log(pElement);
  const hasChilds = pElement.hasChildNodes();
  if (hasChilds) {
    const spanElements = document.querySelectorAll('span') ;
    console.log(spanElements);
    for (let index = 0; index < spanElements.length; index += 1) {
      pElement.removeChild(spanElements[index]);
    }
  }
};

function handleClickButton() {
  const inputText = document.getElementById('carta-texto').value;
  const pElement = document.getElementById('carta-gerada');
  const validInput = validateInput(inputText);
  resetLetter();
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
    pElement.appendChild(spanElement);
  }
}

const createLetter = function () {
  const buttonElement = document.getElementById('criar-carta');
  buttonElement.addEventListener('click', handleClickButton);
};

window.onload = function () {
  createLetter();
};