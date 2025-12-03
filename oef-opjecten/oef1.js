const car = {
    merk: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue"
};

car.color = "red";
car.betrol = "benzine";

delete car.year;

function getMerk(car) {
    console.log(car.merk);
}

getMerk(car);
console.log(car)