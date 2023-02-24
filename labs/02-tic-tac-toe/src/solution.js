const input = require('prompt-sync')();
const print = (a) => process.stdout.write(a)

const VALUE_EMPTY = ' '
const VALUE_COMPUTER = 'X'
const VALUE_PLAYER = 'O'
const SIZE = 3

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

function printBoard() {
    for (let x = 0; x < SIZE; x++) {
        for (let y = 0; y < SIZE; y++) {
            print(board[x][y])

            if (y < SIZE - 1) {
                print("|")
            }
        }

        if (x < SIZE - 1) {
            print('\n-')

            for (let i = 0; i < SIZE - 1; i++) {
                print('+-')
            }
        }

        print('\n')
    }

    print('\n\n')
}

function playerMove() {
    while (true) {
        const userInput = input("Podaj pozycję w formacie x:y ")
        const split = userInput.split(':').map((element) => parseInt(element))

        const [userX, userY] = split

        if (isNaN(userX) || isNaN(userY)) {
            console.log("Niepoprawna pozycja")

            continue
        }
        const x = userX - 1
        const y = userY - 1
        if (
            x < 0 || y < 0 ||
            x > SIZE || y > SIZE
        ) {
            console.log("Niepoprawna pozycja")

            continue
        }

        if (board[x][y] !== VALUE_EMPTY) {
            console.log("Pole zajęte")

            continue
        }

        board[x][y] = VALUE_PLAYER
        return
    }
}

function isDraw() {
    for (let x = 0; x < SIZE; x++) {
        for (let y = 0; y < SIZE; y++) {
            if (board[x][y] === VALUE_EMPTY) {
                return false
            }
        }
    }

    return true
}

function isWinner(playerToCheck) {
    // row
    for (let x = 0; x < SIZE; x++) {
        let currentCount = 0
        for (let y = 0; y < SIZE; y++) {
            if (board[x][y] !== playerToCheck) {
                break
            }

            currentCount++
        }

        if (currentCount === SIZE) {
            return true
        }
    }

    // col
    for (let x = 0; x < SIZE; x++) {
        let currentCount = 0
        for (let y = 0; y < SIZE; y++) {
            if (board[y][x] !== playerToCheck) {
                break
            }

            currentCount++
        }

        if (currentCount === SIZE) {
            return true
        }
    }


    // diagonal 1
    let firstDiagonalCount = 0
    for (let i = 0; i < SIZE; i++) {
        if (board[i][i] !== playerToCheck) {
            break
        }

        firstDiagonalCount++
    }
    if (firstDiagonalCount === SIZE) {
        return true
    }

    // diagonal 2
    let secondDiagonalCount = 0
    for (let i = 0; i < SIZE; i++) {
        if (board[i][SIZE - i - 1] !== playerToCheck) {
            break
        }

        secondDiagonalCount++
    }
    if (secondDiagonalCount === SIZE) {
        return true
    }
}

function computerMove() {
    console.log("ruch komputera")
    const emptyFields = []

    for (let x = 0; x < SIZE; x++) {
        for (let y = 0; y < SIZE; y++) {
            if (board[x][y] === VALUE_EMPTY) {
                emptyFields.push({x, y})
            }
        }
    }

    const randomField = emptyFields[Math.floor(Math.random() * emptyFields.length)]

    board[randomField.x][randomField.y] = VALUE_COMPUTER
}


let currentPlayer = VALUE_PLAYER

printBoard()
while (true) {
    if (currentPlayer === VALUE_PLAYER) {
        playerMove()
    } else {
        computerMove()
    }

    printBoard()

    //sprawdzanie wygranej i remisu
    if (isDraw()) {
        console.log('Remis')
        break
    }

    if (isWinner(currentPlayer)) {
        console.log(currentPlayer + ' Wygrał')
        break
    }


    if (currentPlayer === VALUE_PLAYER) {
        currentPlayer = VALUE_COMPUTER
    } else {
        currentPlayer = VALUE_PLAYER
    }

    print('\n')
}
