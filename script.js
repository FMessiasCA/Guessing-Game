const form = document.querySelector('form');
const guessNumber = document.querySelector('input');
const button = document.querySelector('button');
const span = document.querySelector('span');

const randomNumber = Math.round(Math.random() * 10);

button.addEventListener('click', event => {
    event.preventDefault();

    if (Number(guessNumber) == randomNumber ){
        span.innerText = 'Acertou arrombado!'
    }

    inputNumber.value = "";
})

console.log(randomNumber)