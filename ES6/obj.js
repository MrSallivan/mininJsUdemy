const createCar = (name, model) => ({ name, model })

const ford = createCar('Ford', 'Focus')
console.log(ford);

const yearField = 'year'

const bmw = {
	name: 'BMW',
	['model']: 'X6',
	[yearField]: 2012,
	logFields() {
		const { name, model, year } = this
		console.log(name, model, year);
	}
}
console.log(bmw)

const { year } = bmw

console.log(year);