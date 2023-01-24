document.querySelector('button').addEventListener('click', function (e) {
	var value = document.querySelector('input').value
	var value2 = document.querySelector('#two').value
	localStorage.setItem('headerText', value)

	var obj = {
		text: value2
	}

	localStorage.setItem('object', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', function () {
	var text = localStorage.getItem('headerText')

	document.querySelector('h1').textContent = text

	if (text && text.trim()) {
		document.querySelector('h1').textContent = text
	} else {
		document.querySelector('h1').textContent = 'Заголовок по умолчанию'
	}
	var obj = {}
	try {
		obj = JSON.parse(localStorage.getItem('object'))
	} catch (error) { }


	if (obj && obj.text && obj.text.trim()) {
		document.querySelector('h2').textContent = obj.text
	} else {
		document.querySelector('h2').textContent = 'Заголовок по умолчанию'
	}
})