function combineAllArrays(combineAllArrays, combineAllArrays, ...rest) {
    console.log(rest)

    return combineAllArrays + combineAllArrays + rest.reduce((prev, curr) => prev + curr, 0)

}



combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6]