//!сейчас this привязана к глобальному объекту window

function printObject(objName) {
	console.log('Printing Object', objName)
	for (const key in this) {
		if (this.hasOwnProperty(key)) {
			console.log(`[${key}], ${this[key]} `)
		}
	}
}

var person = {
	firstName: 'Max',
	job: 'Killer',
	age: 25,
	friends: ['Elena', 'Igor']
}
var car = {
	name: 'Ford',
	model: 'Focus',
	year: 2018
}
//!Bind возвращает новую функцию с привязанным контекстом

var printCar = printObject.bind(car)
printCar('Car')

//! метод call сразу вызывает функцию. Первым указываем объект(контекст), вторым аргументы функции

printObject.call(person, 'Person Object')

//! Apply сразу вызывает функцию как call,только аргументы передаются в массиве 

printObject.apply(car, ['Car for applay'])