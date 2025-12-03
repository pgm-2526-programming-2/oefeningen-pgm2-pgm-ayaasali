//Selecteer "de rest"

function sum(a, b, ...rest) {
    console.log(rest);
    return a + b + rest.reduce((prev, curr) => prev + curr, 0);
}


// Rest operator verzamelt de overige argumenten in een array
// Rest operator os altijd op het einde en binnen hakjes


console.log(sum(1, 2, 3))