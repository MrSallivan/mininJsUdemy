var wrapper = document.getElementById('wrap')

// for (let i = 0; i < ps.length; i++) {
// 	ps[i].addEventListener('click', function (e) {
// 		e.target.style.color = 'blue'
// 	})

// }

wrapper.addEventListener('click', function (e) {
	var tagName = e.target.tagName.toLowerCase()
	if (tagName === 'p') {
		e.target.style.color = 'blue'
	}
}) 