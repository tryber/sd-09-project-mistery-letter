const inputField = document.querySelector('#carta-texto');
const inputButton = document.querySelector('#criar-carta');
const textContainer = document.querySelector('#carta-gerada');
const counter = document.querySelector('#carta-contador');

inputButton.addEventListener('click', function () {
  word = document.createElement('span');
  word.innerHTML = inputField.value;
  textContainer.appendChild(word);
});
