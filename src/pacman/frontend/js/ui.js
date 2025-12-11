
/**
 * @file ui.js
 * @description Handles the user interface for starting, ending, and resetting the game.
 */

// Imports necessary modules and variables from other files
import {
  animate, resetGame, setAnimationId,
  cancelAnimation, loadLevel, currentLevel, c, score, playerLives
} from './game.js';
import { enableWASD, resetWASD } from './input.js';

// Selects UI elements from the DOM
// Start screen elements
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const playerNameInput = document.getElementById('playerName');
const canvas = document.getElementById('gameCanvas') || document.querySelector('canvas');

// End screen elements
const endScreen = document.getElementById('endScreen');
const goHomeButton = document.getElementById('goHomeButton');

/**
 * Tracks whether the game is currently running.
 * Prevents multiple instances from starting at the same time.
 * @type {boolean}

 */
let gameRunning = false; // Prevent multiple game starts

/**
 * Starts a new game session. Resets the game state, spawns ghosts,
 * enables player movement, and starts the animation loop.
 */
function startGame() {
  //document.getElementById('cursedGif').style.display = 'none';

  startScreen.style.display = 'none'; // Hide start screen
  canvas.style.display = 'block'; // Show canvas
  endScreen.style.display = 'none'; // Hide end screen

  // Load the first level
  loadLevel(1);

  // Stop any existing animation loop
  cancelAnimation();

  if (!gameRunning) {
    resetGame(); // Reset everything before starting
    //spawnGhosts();
    enableWASD(); // Allow movement
    setAnimationId(requestAnimationFrame(animate));
    gameRunning = true;
  }
}

/**
 * Ends the current game session, stopping the animation loop and displaying the end screen.
 */
function endGame() {
  startScreen.style.display = 'none';
  canvas.style.display = 'none';
  endScreen.style.display = 'block';

  //const cursedGif = document.getElementById('cursedGif');

  // Takes the current score from the current player.
  cancelAnimation(); // Stop the animation loop
  resetWASD(); // Disable movement when returning home
  gameRunning = false;
}

/**
 * Returns the player to the home screen and resets the game state.
 */
function goHome() {
  startScreen.style.display = 'block';
  canvas.style.display = 'none';
  endScreen.style.display = 'none';
  //document.getElementById('cursedGif').style.display = 'none';


  resetGame();
  cancelAnimation(); // Stop the animation loop
  resetWASD(); // Disable movement when returning home
  gameRunning = false;
}


// Attach event listeners
startButton.addEventListener('click', startGame);
goHomeButton.addEventListener('click', goHome);


/**
 * Draws level transitions in when levels are completed.
 * Gives player some time to breathe in between levels.
 */
function drawLevelTransition() {
  // Pause the game for 5 seconds and display "Level Cleared!" text
  cancelAnimation(); // Stop the animation loop
  resetWASD(); // Disable WASD controls

  // Add a black background overlay
  const blackBackground = document.createElement("div");
  blackBackground.style.position = "absolute";
  blackBackground.style.top = "0";
  blackBackground.style.left = "0";
  blackBackground.style.width = "100%";
  blackBackground.style.height = "100%";
  blackBackground.style.backgroundColor = "black";
  blackBackground.style.zIndex = "999"; // Ensure it overlays the game
  document.body.appendChild(blackBackground);

  // Display "Level Cleared!" text
  const levelClearedText = document.createElement("div");
  levelClearedText.innerText = "Level Cleared!";
  levelClearedText.style.color = "yellow";
  levelClearedText.style.position = "absolute";
  levelClearedText.style.font = '20px "Press Start 2P", monospace';
  levelClearedText.style.top = "50%";
  levelClearedText.style.left = "50%";
  levelClearedText.style.transform = "translate(-50%, -50%)";
  levelClearedText.style.fontSize = "40px";
  levelClearedText.style.zIndex = "1000"; // Ensure it overlays the game

  const enterText = document.createElement("p");
  enterText.innerText = "Press Enter to continue...";
  enterText.style.fontSize = "20px";
  enterText.style.color = "white";

  levelClearedText.appendChild(enterText);
  document.body.appendChild(levelClearedText);

  // Press "enter" to continue to the next level
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      document.body.removeChild(levelClearedText); // Remove the text after 5 seconds
      document.body.removeChild(blackBackground); // Remove the black background

      loadLevel(currentLevel); // Load the next level
      enableWASD(); // Re-enable WASD controls

      document.removeEventListener("keydown", handleKeyPress); // Remove the event listener
    }
  };

  // Add the event listener, when the key is pressed, it'll remove it
  document.addEventListener("keydown", handleKeyPress);
}

/**
 * Draws the score to the middle of the screen
 */
function drawScore() {

  c.fillStyle = "white";
  c.font = '20px "Press Start 2P", monospace';
  c.textAlign = "left";
  c.fillText("SCORE", 600, 30);
  c.fillText(score.toString(), 600, 60);

}

/**
 * Draws life icons next to the score on the canvas.
 */
function drawLives() {
  const fullHeart = "❤️";
  const emptyHeart = "🤍";
  const originalSlots = 3;

  let x = 600;
  let y = 90;  // Slightly below score

  for (let i = 0; i < originalSlots; i++) {
    const heart = i < playerLives ? fullHeart : emptyHeart;
    c.fillText(heart, x + i * 30, y);
  }
}

export { startGame, endGame, goHome, drawLevelTransition, drawScore, drawLives };
