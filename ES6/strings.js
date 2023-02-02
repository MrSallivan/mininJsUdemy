const createLink = ({ path, name }) => {
	return `<a href="${path}" name="${name}" target="_blank">${name}</a>`
}
const google = `<li>${createLink({ path: 'https://www.google.com', name: 'Google' })}</li>`
const yandex = `<li>${createLink({ path: 'https://www.ya.ru', name: 'Yandex' })}</li>`

const ul = document.querySelector('ul')

ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)