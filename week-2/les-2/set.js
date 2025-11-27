const numbers = [1, 2, 3, 4, 5]

const uniqueNumbers = new Set(numbers)

console.log(uniqueNumbers.size, uniqueNumbers.add(6),
    uniqueNumbers.has(2)
)

uniqueNumbers.delete(5)

for (const number of uniqueNumbers) {
    console.log(number)
}

//What about  refrence types?

const mixedSet = new Set([
    1, 2, { id: 0 }, 4, 6, 6, { id: 0 }
])

console.log(mixedSet)