const student = Symbol("yme")
const person = Symbol("yme")

console.log(student, student.toString, student.description, student === person)

//Uppercase variabels - waarden die nooit zullen veranderen & je gebruikt die in heel je project!
const STATES = {
    LOADING: Symbol("Laden"),
    LOADED: Symbol("Laden")

}

console.log(STATES.LOADED === STATES.LOADED)