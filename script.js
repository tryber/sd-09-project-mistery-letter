/* Requisito 3, 4 & 5 (respectivamente)
- apertar no botao para gerar a carta
- cada palavra deve ser colocada em uma tag span
- toda tag span deve ser adicionada como filha da tag p

- o texto deve permanecer no campo input

- Se o usuário não preencher o campo ou preencher com
- apenas espaços vazios adicionar a mensagem:
'Por favor, digite o conteúdo da carta.
*/

function createSpan(text) {
  const mySpan = document.createElement('span');
  mySpan.innerText = text;
  return mySpan;
}

function addSpanToParagraph() {
  const generateButton = document.querySelector('button');
  const myParagraph = document.querySelector('#carta-gerada');
  generateButton.addEventListener('click', () => {
    if (document.querySelector('#carta-texto').value.trim() === '') {
      return (myParagraph.innerText = 'Por favor, digite o conteúdo da carta.');
    }
    while (myParagraph.childNodes.length > 0) {
      myParagraph.childNodes.forEach((node) => {
        myParagraph.removeChild(node);
      });
    }
    const wordsList = document.querySelector('input').value.split(' ');
    wordsList.forEach((word) => {
      const newSpan = createSpan(word);
      if (newSpan.innerText.trim() !== '') {
        return myParagraph.appendChild(newSpan);
      }
    });
  });
}

addSpanToParagraph();
