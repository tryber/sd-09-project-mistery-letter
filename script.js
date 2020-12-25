// Requisito 1
function generateInputField() {
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = 'Insira aqui sua carta';
  inputField.id = 'carta-texto';
  document.querySelector('.inputHolder').appendChild(inputField);
}

generateInputField();

// Requisito 2
function generateParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'carta-gerada';
  document.querySelector('.paragraphHolder').appendChild(paragraph);
}

generateParagraph();

// Requisito 3
function generateButton() {
  const myButton = document.createElement('button');
  myButton.id = 'criar-carta';
  myButton.innerText = 'Gerar Carta';
  document.querySelector('.inputHolder').appendChild(myButton);
}

generateButton();

function geradorDeCarta() {
  document.querySelector('#carta-gerada').innerText = '';
  const myText = document.querySelector('#carta-texto').value;
  if (myText !== '' && myText.trim().length !== 0) {
    const myLetter = document.querySelector('#carta-texto').value.split(' ');
    for (let index = 0; index < myLetter.length; index += 1) {
      const myWord = document.createElement('span');
      myWord.innerText = myLetter[index];
      document.querySelector('#carta-gerada').appendChild(myWord);
    }
  } else {
    // Requisito 5
    const myWord = document.createElement('span');
    myWord.innerText = 'Por favor, digite o conteúdo da carta.';
    document.querySelector('#carta-gerada').appendChild(myWord);
  }
}

document.querySelector('#criar-carta').addEventListener('click', geradorDeCarta);
