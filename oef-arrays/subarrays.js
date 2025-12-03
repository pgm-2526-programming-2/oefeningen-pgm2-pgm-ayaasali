const randomNamesArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
console.log(randomNamesArray);

const flatedNames = randomNamesArray.flat();
console.log(flatedNames);

const dubbeleNames = flatedNames.map(name => name = + ' ' + name);
console.log(dubbeleNames);

const mapedNames = randomNamesArray.map(item => {
    if (Array.isArray(item)) {
        return item.slice(1)
    }
    return item
})

console.log(mapedNames);
console.log(randomNamesArray);

randomNamesArray.pop()
console.log(randomNamesArray);