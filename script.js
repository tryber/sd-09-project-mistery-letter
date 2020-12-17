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
  const word = textInput.value.split(' ');
  let problem = true;
  console.log(typeof word);
  console.log(word[0]);
  for (let index in word) {
    if (word[index] !== '') {
      problem = false;
    }
    if (word[index] !== ' ' && typeof word === String) {
      problem = false;
    }
  }
  if (problem === false) {
    textResult.innerHTML = '';
    for (let index in word) {
      const newWord = document.createElement('span');
      newWord.className = aleatoryClass();
      newWord.innerText += word[index];
      textResult.appendChild(newWord);
    }
  } else {
      textResult.innerHTML = 'por favor, digite o conteúdo da carta.';
  }
}

window.onload = function init() {
  buttonCreateText.addEventListener('click', addText);
};
