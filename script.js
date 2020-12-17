const buttonCreateText = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textResult = document.getElementById('carta-gerada');

function aleatoryClass() {
  const classList = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  let aleatory = Math.round(Math.random() * classList.length);
  let classResult;
  if (aleatory < 1) {
    classResult = classList[0];
  } else {
    classResult = classList[aleatory - 1];
  }
  console.log(aleatory)
  console.log(classResult)
  return classResult;
}

function addText() {
  if (textInput.value || textInput.value !== ' ') {
    const word = textInput.value.split(' ');
    for (let index in word) {
      const newWord = document.createElement('span');
      newWord.className = aleatoryClass();
      newWord.innerText += word[index];
      textResult.appendChild(newWord);
    }
  } else {
    const newWord = document.createElement('span');
    newWord.innerText = 'por favor, digite o conteúdo da carta.';
    textResult.appendChild(newWord);
  }
}

window.onload = function init() {
  buttonCreateText.addEventListener('click', addText);
};
