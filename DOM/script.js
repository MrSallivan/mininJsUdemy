var divs = document.querySelectorAll('div')
var link = document.querySelector('a')
var ps = document.querySelectorAll('p')

for (let i = 0; i < divs.length; i++) {
	divs[i].addEventListener('click', function (e) {
		e.stopPropagation()
		console.log(this.getAttribute('id'))

	}, true)
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(e) {
	e.preventDefault()
	var div = divs[0]

	div.style.display = div.style.display === 'none' ? 'flex' : 'none'
}

