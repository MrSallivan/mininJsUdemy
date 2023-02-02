let getAge = (year) => {
	const current = new Date().getFullYear()
	return current - year
}
console.log(getAge(1984))

//!Стрелочные функции не создают контекст

const person = {
	firstName: 'Max',
	age: 35,
	logNameWithTimeout() {
		window.setTimeout(() => {
			console.log(this.firstName);
		}, 1000)
	}
}
person.logNameWithTimeout()