let promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Сервер: Запрашиваю список пользователей БД');
		console.log('...');
		resolve()
	}, 1000)
})

promise.then(function () {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			let users = [
				{ uid: 'id1', name: 'Maxim' },
				{ uid: 'id2', name: 'Elena' },
			]
			console.log('БД: Формирую список пользователей');
			console.log('...');
			resolve(users)
		}, 500)
	})
})
	.then(function (dbUsers) {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				console.log('Сервер: Трансформирую данные для клиента');
				console.log('...');
				let users = dbUsers.map(user => {
					return {
						id: user.uid,
						firstName: user.name,
						timestamp: Date.now()
					}
				})
				resolve(users)
			}, 500)
		})
	})
	.then(function (users) {

		setTimeout(() => {
			console.log('Клиент : Получил данные и обрабатываю их');
			console.log('...');
			console.log(users);
		}, 1000)

	})
	.catch(function (error) {
		console.error(error);
	})
	.finally(function () {
		console.log('Finally');
	})