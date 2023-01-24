document.querySelector('#alert').addEventListener('click', function () {
	alert('Вы кликнули по кнопке')
})
document.querySelector('#confirm').addEventListener('click', function () {
	var desition = confirm('Вы кликнули по кнопке?')
	console.log(desition);
	if (desition) {
		var div = document.createElement('div')
		div.textContent = 'Вы сказали ДА'
		document.body.append(div)
	}
})
document.querySelector('#prompt').addEventListener('click', function () {
	var name = prompt('Name?')
	if (name) {
		var div = document.createElement('div')
		div.textContent = `Your name ${name}`
		document.body.append(div)
	}
})