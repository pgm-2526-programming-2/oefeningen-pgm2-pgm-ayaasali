function addOnlyNumbers(...rest) {
    console.log(rest)
    return rest.reduce((prev, curr) => prev + curr, 0)

}



addOnlyNumbers(1, 5, 6, "cat", "dog", 3); // Er waren 6 argumenten, de som van de getallen is 15.