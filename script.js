function generateLetter(){
    let generateBtn = document.getElementById('criar-carta');
    generateBtn.addEventListener('click', function(){
        let phrase = document.getElementById('carta-texto').value;
        let wordsArray = phrase.split(' ');
        let paragraph = document.getElementById('carta-gerada');
        for(let index = 0; index < wordsArray.length; index += 1){
            let spanElement = document.createElement('span');
            spanElement.innerText = wordsArray[index];
            paragraph.appendChild(spanElement);
        }
    });
}

generateLetter();