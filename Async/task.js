// let promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(2)
// 	}, 2000)
// })
// promise
// 	.then(num => num *= 2)
// 	.then(num => num *= 3)
// 	.catch(err = console.log(err))
// 	.finally(() => console.log('end promise'))

class MyPromise {
	constructor(callback) {
		this.onCatch = null
		this.onFinally = null
		this.thenCbs = []
		this.isRejected = false

		function resolver(data) {
			if (this.isRejected) {
				return
			}

			this.thenCbs.forEach(cb => {
				data = cb(data)
			});


			if (this.onFinally) {
				this.onFinally()
			}
		}

		function rejector(error) {

			this.isRejected = true

			if (this.onCatch) {
				this.onCatch(error)
			}
			if (this.onFinally) {
				this.onFinally()
			}
		}


		callback(resolver.bind(this), rejector.bind(this))
	}

	then(cb) {
		this.thenCbs.push(cb)
		return this
	}

	catch(cb) {
		this.onCatch = cb
		return this
	}

	finally(cb) {
		this.onFinally = cb
		return this
	}

}

let promise = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		reject('Some Error!!!')
		resolve(10)
	}, 2000)
})
promise
	.then(num => num *= 2)
	.then(num => num *= 3)
	.catch(err => console.error(err))
	.finally(() => console.log('end promise'))
	.then(num => console.log('Num ===> ', num))