const buttonCreateText = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textResult = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');

function aleatoryClass() {
  const classList = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  const aleatory = Math.round(Math.random() * classList.length);
  let classResult;
  if (aleatory < 1) {
    classResult = classList[0];
  } else {
    classResult = classList[aleatory - 1];
  }
  return classResult;
}

function conditionProblem(index, word) {
  let problem = true;
  if (word[index] !== '') {
    problem = false;
  }
  if (word[index] !== ' ' && typeof word === 'string') {
    problem = false;
  }
  return problem;
}

function problemVerifyAndCounter(word) {
  let number = 0;
  let problem = true;
  for (let index = 0; index < word.length; index += 1) {
    problem = conditionProblem(index, word);
    number += 1;
  }
  counter.innerText = number;
  return problem;
}

function addText() {
  const word = textInput.value.split(' ');
  let problem = true;
  problem = problemVerifyAndCounter(word);
  if (problem === false) {
    textResult.innerHTML = '';
    for (let index = 0; index < word.length; index += 1) {
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
