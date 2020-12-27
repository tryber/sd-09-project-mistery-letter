function createLetter() {
  const text = document.querySelector('#carta-texto');
  const listWords = text.value.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  for (let index = 0; index < listWords.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = listWords[index];
    paragraph.appendChild(span);
  }
}

window.onload = function () {
  const btnCreate = document.querySelector('#criar-carta');
  btnCreate.addEventListener('click', createLetter);
};
