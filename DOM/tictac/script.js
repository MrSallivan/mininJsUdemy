var player = "X";
var cells = document.querySelectorAll("td");
var result = document.getElementById("result");
var winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", function () {
		if (this.textContent === "") {
			this.textContent = player;
			checkWin();
			player = (player === "X") ? "O" : "X";
		}
	});
}

function checkWin() {
	for (var i = 0; i < winningCombinations.length; i++) {
		var combination = winningCombinations[i];
		if (cells[combination[0]].textContent === player &&
			cells[combination[1]].textContent === player &&
			cells[combination[2]].textContent === player) {
			result.textContent = player + " wins!";
			cells[combination[0]].style.backgroundColor = 'red'
			cells[combination[1]].style.backgroundColor = 'red'
			cells[combination[2]].style.backgroundColor = 'red'
			return;
		}
	}
	if (checkDraw()) {
		result.textContent = "Its a Draw";
	}
}

function checkDraw() {
	for (var i = 0; i < cells.length; i++) {
		if (cells[i].textContentыен === "") {
			return false;
		}
	}
	return true;
}

var restart = document.getElementById("restart");
restart.addEventListener("click", function () {
	for (var i = 0; i < cells.length; i++) {
		cells[i].textContent = "";
	}
	result.textContent = "";
	player = "X";
	cells.forEach((item) => {
		item.style.background = ''
	})
});