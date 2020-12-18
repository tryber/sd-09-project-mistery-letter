// Cria texto da carta
function createEvent() {
  const createBtn = document.querySelector('#criar-carta');
  createBtn.addEventListener('click', function () {
    const inputText = document.querySelector('#carta-texto');
    const printedLetter = document.querySelector('#carta-gerada');
    const arrayText = inputText.value.split(' ');
    for (let index = 0; index < arrayText.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = arrayText[index];
      printedLetter.appendChild(newSpan);
    }

  });
}

createEvent();