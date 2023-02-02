const form = document.querySelector('form')
form.addEventListener('submit', e => {
	e.preventDefault()

	const title = form.title.value
	const text = form.text.value
	const description = form.description.value

	saveForm({ title, text, description })
	saveForm2(title, text, description)
})

//! SPREAD
function saveForm(data) {

	// const formData = {
	// 	date: new Date().toLocaleDateString(),
	// 	title: data.title,
	// 	text: data.text,
	// 	description: data.description
	// }

	// const { title, text, description } = data
	const formData = {
		date: new Date().toLocaleDateString(),
		...data
	}

	console.log('Form data:', formData);
}
saveForm()

//! rest

function saveForm2(...args) {
	const [title, text, description] = args
	const formData = {
		date: new Date().toLocaleDateString(),
		title, text, description
	}

	console.log('Form data:', formData);
}