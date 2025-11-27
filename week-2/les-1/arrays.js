const games = ["super Mario", "zelda", "N+ Game", "Pokemon"]
const favoritegames = [{
    name: "Super mario",
    releaseYear: 1989

}, {
    name: "Zelda",
    releaseYear: 2000

}]

const altGames = new Array()
Array.isArray(games) //true

const secondGame = games[1]
const altSecondGame = games.at(1)
const altsecondeGame = games.at(1)
const lastgame = games.at(-1)  //games[lenght-1]

const amountOfFavGames = favoritegames.length

games.length = 3
const topThree = games

games.lenght = 4

games.lenght = 100
console.log(games)

//console.log(games)


const stringArray = "[1,2,3,4]"
const numbers = JSON.parse(stringArray)
console.log(typeof stringArray, typeof numbers)

numbers.push(5)

const numbersString = JSON.stringify(numbers)
console.log(stringArray, numbers, numbersString)


const students = ["Nick", "Mert", "Yens"]
const people = ["Nick", "Mert", "Yens"]

const teacher = "Adriaan"
const friend = "Adriaan"

console.log(teacher === friend) //true
console.log(students === people) //false

function areArrayEqual(Array1, Array2) {

    const strig1 = JSON.stringify(Array1, Array2)
    const string2 = JSON.stringify(Array1, Array2)
    console.log(strig1 === string2)
}

areArrayEqual(students, people) //true


const matrix = [
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],

]


matrix[1][1]

const colors = ["red", "blue", "white"]



colors.forEach(function (colors) {
    console.log(colors)
})

colors.push("purple")


console.log('numbers', numbers)
const doubleNumbers = numbers.map((value, index) => {
    return value * 2
})

console.log('Double numbers', doubleNumbers)

console.log('Double Numbers as String', doubleNumbers.join('|'))

colors.push("Eind") // Eind.
colors.pop() // Eind verwijderen.
colors.unshift("Begin van array toevoegen");
colors.shift() // Begin verwijderen.


const numbersWithoutEight = doubleNumbers.filter((value) => {
    return value !== 8
})

console.log(numbersWithoutEight)

numbers.some((number) => {
    return number === 8
})

numbers.some((number) => number === 8)

numbers.every((number) => {
    return number === 8
})

// reduce -> minder maken
// van een array naar 1 getal te gaan (meestal een som/optelling)

const sales = [4, 10, 6]

sales.reduce((prevValue, currentValue) => {
    return prevValue + currentValue
})

// loop 1 : 0 + 4 -> 4
// loop 2 : 4 + 10 -> 14
// loop 3 : 14 + 6 -> 16

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 },
]

const totalPrice = products.reduce((prevValue, currentValue) => {
    if (typeof prevValue === 'object') {
        return prevValue.price + currentValue.price
    }
    return prevValue + currentValue.price
})

console.log(totalPrice)

const num = [4, 8, 3, 6,]
num.sort((a, b) => {
    return -1
})

console.log(num)


