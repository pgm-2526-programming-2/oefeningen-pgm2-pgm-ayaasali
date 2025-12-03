// operatores
// > < > <= >= == === != !==

// spradead en Rest operators

// Drie puntjes: ...

const numbers = [1, 2, 3, 4, 5];
console.log(numbers, ...numbers); // 1 2 3 4 5



//reden om te spreaden
//kopie maken van een referntie datatype

const students = ["Mert", "Yens"]
students.push("Aya")
const friends = students



const people = [...students] //nieuwe array referntie kapot
people.push("Salim")

// 2 reden om arrays samen te voegen

const drinks = ["pintje", "gin", "mocktail"]
const snacks = ["Frinkandel", "chipjes"]

const menu = [...drinks, "cola", ...snacks]

// Dit werkt ook allemaal met opjecten.

const car = {
    brand: "Citroen",
    model: "c8",
    year: 2011
}

const upgrade = {
    spoiler: true,
    extra: ["gps", "custum uitmaat"]
}

car.upgrade = upgrade

const upgradedCar = { ...car, ...upgrade }


// oobject keys advanced syntex

const a = "Hallo"

const obj = {
    a
}

// a:a (Eerste is de key , tweede is de veriabele)
// a: "Hallo" (de waarde)
// korte schrijfwijze als key en value dezelfde naam hebben

// 3. wnr een methode geen arrays aanvaard

Math.max(1, 2, 3, 4, 5)

Math.max(...numbers)