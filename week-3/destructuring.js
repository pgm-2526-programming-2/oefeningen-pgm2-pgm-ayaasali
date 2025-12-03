// ophalen van waardes uit een array of  object en die opslaan in een veriabele

const person = ["Aya", "Asali"]

const firstName = person[0]
const lastName = person[1]

//Destructuring
//Door aan de linkerzijde vierkante haakjes gebruiken weten we dat we waardes ui een array gaan destucturen

const [firstN, lastN] = ["Aya", "Asali"]
const [firstNm, lastNm] = person


const results = ["ignace", "arif", "kobe", "justin"]
const [firstWinnar, , thirdWinner] = results

console.log(firstWinnar, thirdWinner) //arif zonder de extra komma / kobe met de legge komma