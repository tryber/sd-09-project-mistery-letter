// Cria texto da carta
function insertText(inputText, printedLetter) {
  const arrayText = inputText.split(' ');
  for (let index = 0; index < arrayText.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = arrayText[index];
    printedLetter.appendChild(newSpan);
  }
}

function removeText(printedLetter) {
  while (printedLetter.innerHTML) {
    printedLetter.removeChild(printedLetter.firstChild)
  }
}

function importText(inputText) {
  const printedLetter = document.querySelector('#carta-gerada');
  if (printedLetter.innerHTML) {
    removeText(printedLetter);
  }
  insertText(inputText, printedLetter);
}

function createLetter() {
  const inputText = document.querySelector('#carta-texto');
  if (!inputText.value) {
    inputText.value = 'Por favor, digite o conteúdo da carta';
  } else {
    importText(inputText.value);
  }
}

function createEvent() {
  // Importação pelo botão
  const createBtn = document.querySelector('#criar-carta');
  createBtn.addEventListener('click', createLetter);

  // Importação pela tecla enter
  const inputBox = document.querySelector('#carta-texto');
  inputBox.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      createLetter();
    }
  });
}

createEvent();
