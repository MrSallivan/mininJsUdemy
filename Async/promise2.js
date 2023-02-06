

const cityPromise = fetch('https://api.sampleapis.com/countries/countries')
console.log(cityPromise);
cityPromise
	.then(data => data.json())
	.then(data => console.log(data))
	.catch(err => {
		console.log('Error', err)
	})


const family = [
	{ member: 'mother', id: 111, coffee: 'Latte' },
	{ member: 'father', id: 222, coffee: 'Espresso' },
	{ member: 'son', id: 333, coffee: 'Cappuccino' }
]
const getCoffe = (member) => {
	const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot')
	return coffeePromise
		.then(data => data.json())
		.then(list => {
			console.log(list);
			const coffee = list.find(el => {
				return el.title === member.coffee
			})
			console.log(coffee);
			return {
				...member,
				coffee
			}
		}).catch(Error('Error oshibka'))
}



const getFamilyMember = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const member = family.find(res => res.id === id)
			if (member) {
				resolve(member)
			} else {
				reject(Error('Член семьи не найден'))
			}
		}, 1500)
	})
}

getFamilyMember(333)
	.then(data => getCoffe(data))
	.then(newMember => {
		console.log('NewMember>>>', newMember)
	}).catch(err => console.log(err))