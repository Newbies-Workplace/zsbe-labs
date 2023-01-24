const input = require('prompt-sync')();
const print = (a) => process.stdout.write(a)

const VALUE_EMPTY = ' '
const VALUE_COMPUTER = 'X'
const VALUE_PLAYER = 'O'
const SIZE = 3

let currentPlayer = VALUE_PLAYER

// const board = [
//     ['O', ' ', ' '],
//     [' ', 'O', ' '],
//     [' ', ' ', 'O'],
// ]

// console.log(board)

// board[0][0] = VALUE_PLAYER
// board[0][1] = VALUE_PLAYER
// board[1][1] = VALUE_X

const board = Array.from(
    {length: SIZE},
    () => Array.from(
        {length: SIZE},
        () => VALUE_EMPTY
    )
)

printBoard()

while (true) {
    if (currentPlayer === VALUE_PLAYER) {
        playerMove()
    } else {
        computerMove()
    }

    printBoard()

    if (isDraw()) {
        console.log('remis')
        break
    }

    if (isWinner(currentPlayer)) {
        console.log('wygrał ' + currentPlayer)
        break
    }

    if (currentPlayer === VALUE_PLAYER) {
        currentPlayer = VALUE_COMPUTER
    } else {
        currentPlayer = VALUE_PLAYER
    }

    print('\n')
}

function printBoard() {
    for (let x = 0; x < SIZE; x++) {
        for (let y = 0; y < SIZE; y++) {
            print(board[x][y])
            if (y < SIZE - 1) {
                print('|')
            }
        }
        if (x < SIZE - 1) {
            print('\n-+-+-\n')
        }
    }
    print('\n\n')
}

function playerMove() {
    while (true) {
        const userInput = input("Podaj pozycję w formacie x:y ")

        const [userX, userY] = userInput.split(':').map((string) => parseInt(string))

        if (isNaN(userX) || isNaN(userY)) {
            console.log('Niepoprawna pozycja')

            continue
        }
        const x = userX - 1
        const y = userY - 1
        if (
            x < 0 || y < 0 ||
            x > SIZE || y > SIZE
        ) {
            console.log("Pozycja poza planszą")

            continue
        }

        if (board[x][y] !== VALUE_EMPTY) {
            console.log("Pole zajęte")

            continue
        }

        board[x][y] = VALUE_PLAYER
        break
    }
}

function computerMove() {
    console.log("Ruch komputera")
    const emptyFields = []

    for (let x = 0; x < SIZE; x++) {
        for (let y = 0; y < SIZE; y++) {
            if (board[x][y] === VALUE_EMPTY) {
                emptyFields.push({x, y})
            }
        }
    }

    const {x, y} = emptyFields[Math.floor(Math.random() * emptyFields.length)]

    board[x][y] = VALUE_COMPUTER
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
        let correctCount = 0
        for (let y = 0; y < SIZE; y++) {
            if (board[x][y] !== playerToCheck) {
                break
            }

            correctCount++;
        }
        if (correctCount === SIZE) {
            return true
        }
    }

    // col
    for (let x = 0; x < SIZE; x++) {
        let correctCount = 0
        for (let y = 0; y < SIZE; y++) {
            if (board[y][x] !== playerToCheck) {
                break
            }

            correctCount++;
        }
        if (correctCount === SIZE) {
            return true
        }
    }

    //diagonal
    let diagonalCount = 0
    for (let x = 0; x < SIZE; x++) { // -1
        if (board[x][(SIZE - 1) - x] !== playerToCheck) {
            break
        }

        diagonalCount++
    }
    if (diagonalCount === SIZE) {
        return true
    }

    //anti-diagonal
    let antiDiagonalCount = 0
    for (let x = 0; x < SIZE; x++) {
        if (board[x][x] !== playerToCheck) {
            break
        }

        antiDiagonalCount++
    }
    if (antiDiagonalCount === SIZE) {
        return true
    }

    //no matches
    return false
}