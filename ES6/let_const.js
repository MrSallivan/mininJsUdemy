for (var index = 0; index < 5; index++) {
	setTimeout(function () {
		console.log(index);
	}, 1000)

}
//5 5 5 5 5

for (let index = 0; index < 5; index++) {
	setTimeout(function () {
		console.log(index);
	}, 1000)

}
//1 2 3 4 5