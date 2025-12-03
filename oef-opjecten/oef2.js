const person = {
    name: "Anna",
    age: 25,
    adres: {
        street: "Hoofdstraat",
        number: 123,
        city: "Stadsville"
    }
};

console.log(person.adres.number);

person.telefoon = 5442855487;

const extraInfo = {
    hobby: "schilderen",
    favcolor: "blauw",
    lievelingseten: "pizza"
};

person.extraInfo = extraInfo;

console.log(person)