class Dropdown {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.items = options.items

		this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

		this.$el.addEventListener('click', e => {
			if (e.target.classList.contains('dropdown__label')) {
				if (this.$el.classList.contains('open')) {
					this.close()
				} else {
					this.open()
				}
			}
		})

		const itemsHTML = this.items.map()

		this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
	}

	open() {
		this.$el.classList.add('open')
	}

	close() {
		this.$el.classList.remove('open')

	}
}




const dropdown = new Dropdown('#dropdown', {
	items: [
		{ label: 'Москва', id: 'msk' },
		{ label: 'Санкт-Петербург', id: 'spb' },
		{ label: 'Новосибирск', id: 'nsk' },
		{ label: 'Краснодар', id: 'krdr' },
	]
})