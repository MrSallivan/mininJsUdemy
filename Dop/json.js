var person = {
	name: 'Max',
	age: 26,
	car: {
		model: 'Ford'
	},
	job: 'Frontend',
	friends: ['Elena', 'Igor']
}
var str = JSON.stringify(person)
var objP = JSON.parse(str)
console.log(objP);