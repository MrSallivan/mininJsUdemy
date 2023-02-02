var car = {
	name: 'Ford',
	year: 2015,
	person: {

	}
}
//! Когда мы создаем объект car мы наследуемся от Object.prototype
//! car.__proto__ => Object.prototype

//! [] => Array => Object.prototype

//? ПРОТОТИПЫ
//классы пишутся с большой буквы

function Car(name, year) {
	this.name = name
	this.year = year
}

Car.prototype.getAge = function () {
	return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'

var ford = new Car('Ford', 2015)
var bmw = new Car('BMW', 2018)

ford.color = 'blue'