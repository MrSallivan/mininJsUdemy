//! Объект для работы с датой и временем

var date = new Date()
console.log(date.getSeconds());
console.log(date.getMonth());
date.setDate(20)
console.log(date.getDate());
console.log(date.getTime()); //!~количество милисекунд с 1января 1970года

var date2 = new Date(3600 * 24 * 1000)
console.log(date2)