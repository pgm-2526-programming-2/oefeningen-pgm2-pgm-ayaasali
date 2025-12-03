// Genereer een array met 10 willekeurige getallen tussen 1 en 100`
const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
);
console.log(randomNumbers);

const allBiggerThan10 = randomNumbers.every(Number => Number.length < 10)
console.log(allBiggerThan10)

randomNumbers.pop()
console.log(randomNumbers)

randomNumbers.shift()
console.log(randomNumbers)

randomNumbers.unshift(5)
console.log(randomNumbers)

const someSmallerThan20 = randomNumbers.some(number => number < 20)
console.log(someSmallerThan20)

const joinedNumbers = randomNumbers.join('  ')
console.log(joinedNumbers)

const sortedNumbers = randomNumbers.sort((a, b) => a - b)
console.log(sortedNumbers)

const filteredNumbers = randomNumbers.filter(number => number > 50)
console.log(filteredNumbers)

const everyBiggerThan30 = randomNumbers.every(number => number > 30)
console.log(everyBiggerThan30)