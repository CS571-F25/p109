/**
 * @file input.js
 * @description Handles player movement using keyboard inputs (WASD controls).
 */

import { player } from './game.js';
import { endGame } from './ui.js';

const playerSpeed = 2; // You can change this to adjust Pac-Man's speed

/**
 * Handles player movement based on key press events.
 * Updates the player's velocity accordingly.
 * 
 * @param {KeyboardEvent} event - The keydown event.
 */
function changeVelocity({ key }) {
  player.velocity.x = 0;
  player.velocity.y = 0;
  switch (key) {
    case 'w':
      player.velocity.y = -playerSpeed;
      player.direction = "up";
      break;
    case 'a':
      player.velocity.x = -playerSpeed;
      player.direction = "left";
      break;
    case 's':
      player.velocity.y = playerSpeed;
      player.direction = "down";
      break;
    case 'd':
      player.velocity.x = playerSpeed;
      player.direction = "right";
      break;
    case 'Escape':
      endGame();
      break;
  }
}

/**
 * Enables player movement by adding an event listener for keyboard input.
 * Should be called when the game starts.
 */
function enableWASD() {
  window.addEventListener('keydown', changeVelocity);
}
  
/**
 * Disables player movement by removing the event listener.
 * Should be called when the game ends or is paused.
 */
function resetWASD() {
  window.removeEventListener('keydown', changeVelocity);
}

// Enable movement when game starts
enableWASD();

export { enableWASD, resetWASD };