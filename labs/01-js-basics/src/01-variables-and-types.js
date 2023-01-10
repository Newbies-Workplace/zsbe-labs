/*
https://javascript.info/intro
*/

/* Zmienne */

// kiedyś
var thirdVariable = true

// teraz
let firstVariable = "hejka świat"
const SECOND_VARIABLE = 123

let a = 1, b = 2

/* Typy danych */

// prymitywne
const str = "Ciąg znaków"
const num = 123456
const bool = true
const hmmm = null
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof bool)
// console.log(typeof hmmm)

// obiekty
const obj1 = {}
const obj2 = {
    name: "John",
    doAFlip: function () {
        console.log(this.name + " flipped")
    }
}

// obj2.doAFlip()

// tablice etc.
const arr1 = new Array(1, "apple", {species: "kapibara"})
const arr2 = [4, 5, 6]

// console.log(arr1)
// console.log(arr1.length)
// console.log(arr2)

// Co nam to zwróci?
// console.log(arr1[1])

// arr1[1] = "banana"
// console.log(arr1)

// const board = [
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '9'],
// ]
// console.log(board)
// console.log(board[1][0])