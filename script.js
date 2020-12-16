/* Requisito 3 & 4
- apertar no botao para gerar a carta
- o texto deve permanecer no campo input
- cada palavra deve ser colocada em uma tag span
- toda tag span deve ser adicionada como filha da tag p
*/

function createSpan(text) {
  const mySpan = document.createElement('span');
  mySpan.innerText = text;
  return mySpan;
}

function addSpanToParagraph() {
  const generateButton = document.querySelector('button');
  const myParagraph = document.querySelector('p');
  generateButton.addEventListener('click', () => {
    const wordsList = document.querySelector('input').value.split(' ');
    wordsList.forEach((word) => {
      const newSpan = createSpan(word);
      myParagraph.appendChild(newSpan);
    });
  });
}

addSpanToParagraph();
