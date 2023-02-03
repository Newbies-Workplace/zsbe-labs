const input = require('prompt-sync')();
const print = (a) => process.stdout.write(a)

const VALUE_EMPTY = ' '
const VALUE_COMPUTER = 'X'
const VALUE_PLAYER = 'O'
const SIZE = 3

const board = [
    ['O', ' ', ' '],
    [' ', 'O', ' '],
    [' ', ' ', 'O'],
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

printBoard()
playerMove()
printBoard()
