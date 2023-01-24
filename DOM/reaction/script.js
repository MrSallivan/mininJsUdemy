// Get references to the container div, start button, timer input, and score display
const container = document.getElementById("container");
const startBtn = document.getElementById("startBtn");
const timerInput = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

let score = 0;
let timer;

startBtn.addEventListener("click", function () {
	// Get the game time from the input field
	const gameTime = timerInput.value;

	// Start the game timer
	timer = setTimeout(endGame, gameTime * 1000);

	// Create a new circle
	createCircle();
});

function createCircle() {
	// Create a new div for the circle
	const circle = document.createElement("div");

	// Generate random size and position for the circle
	const size = Math.floor(Math.random() * 30) + 10;
	const x = Math.floor(Math.random() * (300 - size));
	const y = Math.floor(Math.random() * (300 - size));

	// Set the size and position of the circle
	circle.style.width = size + "px";
	circle.style.height = size + "px";
	circle.style.left = x + "px";
	circle.style.top = y + "px";

	// Add the 'circle' class to the div for styling
	circle.classList.add("circle");

	// Add the circle to the container
	container.appendChild(circle);

	// Add a click event listener to the circle
	circle.addEventListener("click", function () {
		// Increase the score by 1
		score++;
		scoreDisplay.innerHTML = "Score: " + score;

		// Remove the circle from the container
		container.removeChild(circle);

		// Create a new circle
		createCircle();
	});
}

function endGame() {
	// Clear the container of any remaining circles
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	// Display the final score
	alert("Game over! Your score is " + score);

	// Reset the score
	score = 0;
	scoreDisplay.innerHTML = "Score: 0";
}