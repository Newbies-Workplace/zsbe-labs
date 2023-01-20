const prompt = require('prompt-sync')();
const randomNumber = Math.floor(Math.random() * 100)

console.log("Zgadnij liczbę od 1 do 100")

while (true) {
    const guess = parseInt(prompt("Twoja propozycja to... "))

    console.log(guess)

    if (guess === randomNumber) {
        break
    }
    if (guess > randomNumber) {
        console.log("za dużo")
        continue
    }
    if (guess < randomNumber) {
        console.log("za mało")
        continue
    }
}

console.log("Udało Ci się za x razem!")
