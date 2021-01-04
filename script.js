const splitText = function (array) {
  const letter = array.split(' ');
  return letter;
};

function handleClickButton() {
  const inputText = document.getElementById('carta-texto').value;
  const letter = splitText(inputText);
  const pElement = document.getElementById('carta-gerada');

  for (let index = 0; index < letter.length; index += 1) {
    const spanElement = document.createElement('span');
    spanElement.className = 'word';
    spanElement.innerText = letter[index];
    pElement.appendChild(spanElement);
  }

  // console.log(pElement);
}

const createLetter = function () {
  const buttonElement = document.getElementById('criar-carta');
  buttonElement.addEventListener('click', handleClickButton);

  // console.log(buttonElement);
};

window.onload = function () {
  createLetter();
}