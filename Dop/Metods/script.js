var str = '1,2,3,4,5,6,7,8'

var array = str.split(',') //!Массив из строки 

console.log(array);
console.log(array.join('-')); //!массив в строку
console.log(array.reverse()); //!переворачивает массив

array.reverse().splice(1, 2) //! удаляет или дополняет элементы 1-с какого начать, 2-сколько удалить
console.log(array);
var array2 = ['one', 'two', 'three', 'four', 'five']

array2.splice(1, 0, 'hello') //! 1-c какого нвчать, 2 0-удалить 1- добавить, 3 - эелемент который добавить(можно указать несколько элементов)

console.log(array2);

var newArray = array.concat(array2) //! объединияет массивы

//! FIND если колбэк возвращает true, то возвращается данный элемент (возвращает первое соответствие)

var objArr = [
	{ name: 'Alex', age: 27 },
	{ name: 'Elena', age: 25 },
	{ name: 'Egor', age: 26 },
	{ name: 'Alex', age: 38 },
]

var person = objArr.find((item) => {
	return item.age < 27
})
console.log(person)

//! FILTER

var oddArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((i) => {
	return i % 2 === 0
})
console.log(oddArr)

//! MAP
var arr3 = ['1', '2', '3', '4']
var numArr = arr3.map((i) => {
	return parseInt(i) * 2
})
console.log(numArr)
