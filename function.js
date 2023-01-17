var currentYear = 2023
var carName = 'Ford'
var carYear = 2008
var carAge = currentYear - carYear
var personYear = 1984



if (calcYear(carYear) < 10) {
	console.log(`<>>10`)
} else {
	console.log('>10')
}

function calcYear(year) {
	var result = currentYear - year
	return result
}

var sayHello = function (name) {
	console.log(`Say Hello, ${name}`)
}

sayHello('Alex')