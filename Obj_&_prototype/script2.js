var toyota = Object.create({
	calcDistancePerYear: function () {
		Object.defineProperty(this, 'distancePerYear', {
			value: Math.ceil(this.distance / this.age),
			enumerable: false,
			writable: false,
			configurable: false
		})
	}
}, {//getOwnPropertyDescriptor
	name: {
		value: 'Toyota',
		enumerable: true,
		writable: false,
		configurable: false
	},
	model: {
		value: 'Altezza',
		enumerable: true,
		writable: false,
		configurable: false
	},
	year: {
		value: 2015,
		enumerable: true,
		writable: false,
		configurable: false
	},
	distance: {
		value: 120500,
		enumerable: true,
		writable: true,
		configurable: false
	},
	age: {
		enumerable: true,

		get: function () {
			console.log(`Получаем возраст`)
			return new Date().getFullYear() - this.year
		},
		set: function () {
			console.log(`Устанавливаем значение`)

		}
	}
})

console.log(Object.keys(toyota)) //! не покажет ключи из прототипа

//! Для отображения ключей и из прототипа используем FOR IN
toyota.calcDistancePerYear()
for (const key in toyota) {
	if (Object.hasOwnProperty.call(toyota, key)) {

		console.log(key);

	}
}