var createCounter = function (counterName) {
	var counter = 0
	return {
		increment: function () {
			counter++
		},
		decrement: function () {
			counter--
		},
		getCounter: function () {
			return console.log(counter)
		}
	}
}
var counterA = createCounter('CounterA')
var counterB = createCounter('CounterB')

counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()
counterA.getCounter()
counterB.decrement()
counterB.decrement()
counterB.decrement()
counterB.getCounter()
