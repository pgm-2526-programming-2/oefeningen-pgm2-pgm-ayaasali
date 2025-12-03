function add(...numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
}



add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7