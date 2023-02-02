var person = {
	age: 28,
	name: 'Alex',
	job: 'Frontend',
	displayInfo: function (ms) {
		console.log(this)
		var _self = this //! 1й способ замкунть this в другую переменную

		setTimeout(function () {
			debugger
			console.log("Name", _self.name)
			console.log("Age", _self.age)
			console.log("Job", _self.job)
		}, ms)
	}
}

person.displayInfo(2000)

var person2 = {
	age: 35,
	name: 'Ivan',
	job: 'Backend',
	displayInfo: function (ms) {
		console.log(this)
		//! 2й способ привязать контекст через bind

		setTimeout(function () {
			debugger
			console.log("Name", this.name)
			console.log("Age", this.age)
			console.log("Job", this.job)
		}.bind(this), ms)
	}
}

person2.displayInfo(2000)


