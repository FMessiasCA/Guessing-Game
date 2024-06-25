/* Pegando os elementos, através do querySelector, que irei utilizar e os transformando em vareáveis constantes. */
const guessNumberInput = document.querySelector('#guessNumber');
const guessButton = document.querySelector('#guessButton');
const span = document.querySelector('span');
const resetGame = document.querySelector('#resetGame')

/* Gerando um número aleatório, inteiro e que vai até 10. */
const randomNumber = Math.round(Math.random() * 10);

/* Criando uma variável que armazena a quantidade de tentativas */
let attempts = 0;

/* Toda vez que o botão sofrer um evento de clique, ele irá disparar uma função. */
guessButton.addEventListener('click', (event) => {
    /* Para evitar que a página fique recarregando a cada evento. */
    event.preventDefault();

    /* Para evitar que ditem números abaixo ou acima do proposto */
    if (guessNumberInput.value < 0 || guessNumberInput.value > 10) {
        guessNumberInput.value = ""
        guessNumberInput.focus();
        return alert(`Número inválido! Apenas números entre 0 e 10.`)
    }

    /* Para evitar que não ditem números.*/
    if (guessNumberInput.value == '') {
        guessNumberInput.value = ""
        guessNumberInput.focus();
        return alert(`Digite um número qualquer que esteja entre 0 e 10.`)
    }

    /* A cada clique no botão, o número de tentativas vai somando +1 em seu valor. */
    attempts++;

    /* Criei uma variável para armazenar o valor inserido no input. */
    let guessNumber = guessNumberInput.value;

    /* Condicional criada para definir se o valor é 'igual a' e ações de resultado.*/
    if (guessNumber == randomNumber) {
        span.innerText = (attempts == 1) ? `De primeira não tem graça! 🤣` : `Você acertou... depois de ${attempts} tentativas até minha vovozinha.`

        guessButton.style.display = 'none';
        resetGame.style.display = 'block';
    } else {
        span.innerText = `Você errou, continue a tentar. 😅`
        guessNumberInput.value = '';
    }


});

/* Um botão de reset que fica disponível a cada vitória. */
resetGame.addEventListener('click', (e) => {
    attempts = 0;
    guessNumberInput.value = '';

    span.innerHTML = '';

    guessButton.style.display = 'inline-block';
    resetGame.style.display = 'none';

    guessNumberInput.focus();
});
