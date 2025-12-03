function zijnObjectenIdentiek(id1, id2) {

    if (id1.length !== id2.length) {
        return false;
    }

    return true;
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true