const inputText = document.getElementById('carta-texto');
const buttonLetter = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const contador = document.getElementById('carta-contador');
const optionClass = {
  key1: ['newspaper', 'magazine1', 'magazine2'],
  key2: ['medium', 'big', 'reallybig'],
  key3: ['rotateleft', 'rotateright'],
  key4: ['skewleft', 'skewright'],
};

function ramdonClass() {
  const firstNumber = Math.ceil(Math.random() * 4);
  const chave1 = optionClass[`key${firstNumber}`];
  const class1 = chave1[Math.floor(Math.random() * chave1.length)];
  let secondNumber = Math.ceil(Math.random() * 4);
  if (secondNumber === firstNumber) {
    secondNumber = Math.ceil(Math.random() * 4);
  }
  const chave2 = optionClass[`key${secondNumber}`];
  const class2 = chave2[Math.floor(Math.random() * chave2.length)];
  return `${class1} ${class2}`;
}
const words = document.createElement('span');
words.innerHTML = '';
contador.appendChild(words);

function generateletter() {
  buttonLetter.addEventListener('click', function () {
    if (inputText.value === '' || !inputText.value.trim()) {
      const span = document.createElement('span');
      span.innerHTML = 'Por favor, digite o conteúdo da carta.';
      letter.appendChild(span);
    } else {
      letter.innerHTML = '';
      const text = inputText.value;
      const textSplit = text.split(' ');
      for (let index = 0; index < textSplit.length; index += 1) {
        const span = document.createElement('span');
        span.innerHTML = textSplit[index];
        span.className = ramdonClass();
        letter.appendChild(span);
      }
      words.innerHTML = '';
      const countWord = letter.childElementCount;
      words.innerHTML = `${countWord}`;
      contador.appendChild(words);
    }
  });
}

// functions
generateletter();
