function somArrays(nrOne, nrTwo) {
    return nrOne.map((getal, i) => getal + nrTwo[i])
}

const array1 = [4, 6, 5]
const array2 = [2, 3, 1]

const result = somArrays(array1, array2)

console.log(result)