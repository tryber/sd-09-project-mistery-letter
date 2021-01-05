const message = document.getElementById('carta-texto');
const createBtn = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

function createLetter() {
  const text = message.value.split(' ');
  for (let index = 0; index < text.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = text[index];
    letter.appendChild(span);
  }
}

createBtn.addEventListener('click', createLetter);
