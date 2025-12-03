const person = {
    firstName: "Aya",
    lastName: "Asali",
    age: 19
}

const myFirstName = person.firstName
const myLastName = person.lastName
const myAge = person.age

//belletje variabele naam  zelfde als keynaam?

// const {firstName, lastName, age} = person

//verscill tussen arrray en object destructring, object is op basis van een key! niet de index! dus de volgerde maakt niet uit (in tegenstelling tot array destuructring)

const { firstName, age, gender = 'Male' } = person

console.log(age, gender) //30 , undefined (Male wnr default waarde)

//Nadel van object destructring! zelfde naam als key in object!

const options = {
    c: 20000,
    w: 3000,
    mod: 'c8',
    b: undefined
}

const { w: weight, mod: model, c: cost, b: brand = "Citroen" } = options // nieuwe variabelen namen!

const { w: altWeight, ...rest } = options