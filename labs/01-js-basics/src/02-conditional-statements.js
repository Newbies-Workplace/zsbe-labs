/* if-else */
const age = 17

if (age >= 18) {
    console.log("Pełnoletni")
} else {
    console.log("Niepełnoletni")
}

// if (age >= 18) {
//     console.log("Staruch")
// } else if (age >= 12) {
//     console.log("Młodzież")
// } else {
//     console.log("Dziecko")
// }


/* ternary */
// const anotherAge = 19
//
// let firstAccountType
// if (anotherAge >= 18) {
//     firstAccountType = "dziad"
// } else {
//     firstAccountType = "nie dziad"
// }
// console.log(firstAccountType)
//
// const secondAccountType = anotherAge >= 18 ? "dziad" : "nie dziad"
// console.log(secondAccountType)


/* switch */
const role = "admin" // "admin" / "user" / "moderator"

// switch (role) {
//     case "admin":
//         console.log("użycie komendy")
//         break
//     case "user":
//         console.log("nie masz uprawnień")
//         break
// }

// switch (role) {
//     case "admin":
//     case "moderator":
//         console.log("masz uprawnienia")
//         break
//     case "user":
//         console.log("nie masz uprawnień")
//         break
//     default:
//         console.log("kto ty?")
// }