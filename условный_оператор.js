var currentYear = 2022
var carName = 'Ford'
var carYear = 2008
var carAge = currentYear - carYear


if (carAge < 5) {
	console.log(`${carName} меньше 5 лет`)
} else if (carAge >= 5 && carAge <= 10) {
	console.log(`${carName} >=5 ili <=10`)
} else {
	console.log(`Возрвст ${carName} равняется ${carAge}`)
}

//? FALSE 
//? 0 null undefined '' NaN
//! TRUE
//! 'string' number

if (NaN) {
	console.log(`значение true`)
} else {
	console.log(`значение false`)
}


