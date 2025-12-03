const words = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];


// Unshift //
words.unshift('Hallo')

console.log(words)

// JOIN //
const contectWords = words.join(' - ')
console.log('Verbonden string: ', contectWords)

// some //

const beginsWithB = words.some(word => word.startsWith('b'))
console.log('Begint met B: ', beginsWithB)

// Every //
const allHaveMoreThan2Letters = words.every(word => word.length > 2)
console.log('Worden die meer dan 2 letters hebben: ', allHaveMoreThan2Letters)

// sort //
const sortedWords = words.sort()
console.log('Gesorteerde woorden: ', sortedWords)

const thirdElement = words[2];
console.log('Element op derde positie:', thirdElement);

// filter //
const filteredWords = words.filter(word => word.length > 4)

console.log(filteredWords);