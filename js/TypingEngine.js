// Typing scripts
const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'
const wordDisplayElement = document.getElementById("words-display")
const wordInputElement = document.getElementById("words-input")
const timerElement = document.getElementById("timer")
let typed = 0;
let second = 0;
let cron;


wordInputElement.addEventListener('input', () => {
    typed += 1
    if (typed == 1) {
        start()
        console.log(document.getElementById("words-display").innerText)
        console.log(document.getElementById("words-display").innerText.length)
    }


    const arrayWord = wordDisplayElement.querySelectorAll('span')
    const arrayValue = wordInputElement.value.split('')

    let correct = true
    arrayWord.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')

            correct = false
        }
        else if (character == characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        }
        else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
        wordInputElement.innerHTML = null
    })

    if (correct) {
        pause()

        // renderNewQuote()
        let result = document.getElementById("words-display").innerText.length / parseInt(document.getElementById("timer").innerText) * 12
        console.log(result)
    }
})

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
}
async function renderNewQuote() {
    typed = 0
    timerElement.innerText = 0
    const quote = await getRandomQuote()
    wordDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement("span")
        characterSpan.innerText = character
        wordDisplayElement.appendChild(characterSpan)
    })
    wordInputElement.value = null

}


// Timer
function start() {
    pause();
    cron = setInterval(() => { timer(); }, 1000);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    second = 0;
    document.getElementById('timer').innerText = '0';
}

function timer() {
    second += 1;
    document.getElementById('timer').innerText = second;
}


//Rendering new quote
renderNewQuote()
