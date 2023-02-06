// setTimeout(function () {
// 	alert('Hello')
// }, 2000)

let counter = 0

let interval = setInterval(function () {
	counter++
	console.log(counter);
}, 1000)

setTimeout(() => {
	clearInterval(interval)
}, 5000)