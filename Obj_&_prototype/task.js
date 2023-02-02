/** 
Реализовать возможность используя прототип, чтобы у каждого массива был новый метод, позволяющий удваивать значение каждого элемента с учетом типа данных таким образом, чтобы:

1. Для чисел это возведение в квадрат
2. Для строк это удваивание строк
3. Метод не изменял существующий массив и возвращал новый

Пример:
[1, 2, 3] => [1, 4, 9]
[5, 'hello', 6] => [25, 'hellohello, 36]
*/

var a = [1, 2, 3]
var b = [5, 'hello', 6]

Array.prototype.double = function () {
	var arr = []

	for (const item of this) {
		if (typeof item === 'string') {
			arr.push(item + item)
		}
		if (typeof item === 'number') {

			arr.push(item * item)
		}
	}
	return arr
}

var newA = a.double()
var newB = b.double()

console.log('A', newA);
console.log('B', newB.double());