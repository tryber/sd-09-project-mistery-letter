function createStyleWord() {
  const result;
  const styleClass1 = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig',
    'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  const styleClass2 = ['magazine1', 'newspaper', 'magazine2', 'medium', 'reallybig', 'big',
    'rotateright', 'rotateleft', 'skewright', 'skewleft'];
  const styleClass3 = ['magazine2', 'newspaper', 'magazine1', 'reallybig', 'big', 'medium',
    'rotateright', 'rotateleft', 'skewright', 'skewleft'];
  const sort = Math.floor(Math.random() * 3);
  if (sort === 0) {
    result = styleClass1;
  } else if (sort === 1) {
    result = styleClass2;
  } else {
    result = styleClass3;
  }
  return result;
}

function insertClass(span) {
  const listStyle = createStyleWord();
  for (let item = 0; item < listStyle.length; item += 1) {
    span.classList.add(listStyle[item]);
  }
}

function createLetter() {
  const text = document.querySelector('#carta-texto');
  const listWords = text.value.split(' ');
  const paragraph = document.querySelector('#carta-gerada');
  const count = document.querySelector('#carta-contador');
  paragraph.innerText = '';
  if (listWords[0] === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    count.innerText = 0;
  } else {
    for (let index = 0; index < listWords.length; index += 1) {
      count.innerText = listWords.length;
      const span = document.createElement('span');
      span.innerText = listWords[index];
      insertClass(span);
      paragraph.appendChild(span);
    }
  }
}

window.onload = function () {
  const btnCreate = document.querySelector('#criar-carta');
  btnCreate.addEventListener('click', createLetter);
};
