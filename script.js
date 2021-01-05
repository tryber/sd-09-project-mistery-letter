const message = document.getElementById('carta-texto');
const createBtn = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

function createLetter() {
  const text = message.value.split(' ');
  const helper = message.value.replace(/\s/g, '');
  if (text === '' || helper === '') {
    message.value = 'Por favor, digite o conteúdo da carta';
    return;
  }
  for (let index = 0; index < text.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = text[index];
    letter.appendChild(span);
  }
}

createBtn.addEventListener('click', createLetter);
