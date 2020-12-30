function createStyleWord() {
  const styleClass = ['newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright'];
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['meduim', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const inclination = ['skewleft', 'skewright'];
  let result = `${style[Math.floor(Math.random() * 3)]}`;
  result += ` ${size[Math.floor(Math.random() * 3)]}`;
  result += ` ${rotation[Math.floor(Math.random() * 2)]}`;
  result += ` ${inclination[Math.floor(Math.random() * 2)]}`;
  return result;
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
      span.className = createStyleWord();
      paragraph.appendChild(span);
    }
  }
}

window.onload = function () {
  const btnCreate = document.querySelector('#criar-carta');
  btnCreate.addEventListener('click', createLetter);
};
