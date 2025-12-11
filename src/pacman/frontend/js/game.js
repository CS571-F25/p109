/**
 * @file game.js
 * @description Handles the core game logic, including animation, player movement, collision 
 * detection, and game state management.
 */

import { Player } from './player.js';
import { Enemy, checkCollision, preventGhostOverlap } from './enemy.js';
import { SmartEnemy } from './smartEnemy.js';
import { Clyde } from './clyde.js';
import { Pellet, Cherry } from './pellet.js';
import { endGame, drawLevelTransition, drawScore, drawLives } from './ui.js';
import { Wall, checkWallCollision } from './wall.js';
import { SuperPellet } from './superpellet.js';
import winScreenImg from '../designs/pac_man_you_win.PNG';

// Import maze and pellet data from level-specific files
import {
  spawnLevel1, 
  spawnPelletsLevel1,
  level1Tunnel, 
  cherrySpawnPosition as level1CherryPos,
  spawnGhosts as spawnGhostsLevel1,
  spawnPlayer as spawnPlayerLevel1
} from './level1Game.js';
import {
  spawnLevel2, 
  spawnPelletsLevel2, 
  level2Tunnel,
  cherrySpawnPosition as level2CherryPos,
  spawnGhosts as spawnGhostsLevel2,
  spawnPlayer as spawnPlayerLevel2
} from './level2Game.js';
import {
  spawnLevel3, 
  spawnPelletsLevel3, 
  level3Tunnel,
  cherrySpawnPosition as level3CherryPos,
  spawnGhosts as spawnGhostsLevel3,
  spawnPlayer as spawnPlayerLevel3
} from './level3Game.js';

// Select the canvas element and get the 2D rendering context
const canvas = document.getElementById('gameCanvas') || document.querySelector('canvas');
const c = canvas.getContext('2d');

// Size the canvas to the pacman container if available to keep it scoped
const pacmanRoot = document.getElementById('pacmanRoot');
const bounds = pacmanRoot?.getBoundingClientRect();
canvas.width = bounds?.width || innerWidth;
canvas.height = bounds?.height || Math.max(innerHeight * 0.75, 640);

/** 
 * Stores the animation loop ID for managing `requestAnimationFrame()`.
 * @type {number|null}
 */
let animationId = null;

/**
 * Player variable to store player.
 */
let player = null;

/** 
 * The score of the game when a player collects pellets, eats ghosts
 * @type {number}
 */
let score = 0;

/** 
 * The number of ghosts eaten after eating a superpellet
 * @type {number}
 */
let ghostsEaten = 0;

/** 
 * Array to store the maze walls.
 * @type {Wall[]}
 */
let maze = [];

/** 
 * Array to store pellet instances.
 * @type {Pellet[]}
 */
let pellets = [];

/** 
 * Array to store cherry instances.
 * @type {Cherry[]}
 */
let cherries = [];

/** 
 * Array to store ghost (enemy) instances.
 * @type {Enemy[]}
 */
let ghosts = [];

/** 
 * Current level of the game.
 * @type {number}
 */
let currentLevel = 1;

/**
 * Player's lives for the entire game.
 * @type {number}
 */
let playerLives = 3;

/**
 * The condition for when cherry spawns depending on how many pellets 
 * have been eaten. (default 50%)
 * @type {number}
 */
let cherrySpawnThreshold = 0.5; 

/**
 * How many points a cherry grants.
 * @type {number}
 */
let cherryPoints = 100; 

/**
 * Tracks how many pellets.
 * @type {number}
 */
let pelletsAtLevelStart = 0;

/**
 * Tracks if cherry has spawned.
 * @type {boolean}
 */
let cherryHasSpawned = false;

/**
 * For lookup possible Cherry spawns.
 * @type {number}
 */
const levelCherrySpots = {
    1: [ level1CherryPos ],
    2: level2CherryPos,
    3: level3CherryPos
  };

/**
 * Tracks if superpellet has been eaten
 * @type {boolean}
 */
let superpelletEaten = false;

/**
 * Allows outside classes to update the score (enemy.js)
 * @param {number} points - The number of points to increment the score by.
 */
export function updateScore(points) {
    score += points;
}

/**
 * Allows outside classes to increment the number of ghosts that have been eaten (enemy.js)
 */
export function incrementGhostsEaten() {
  ghostsEaten++;
}

/**
 * Sets the animation ID for the current game loop.
 * @param {number} id - The animation frame ID from requestAnimationFrame.
 */
function setAnimationId(id) {
  animationId = id;
}

/**
 * Cancels the current animation loop.
 */
function cancelAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

/**
 * Runs the game loop, updating the canvas, drawing the maze, moving the player, drawing ghosts,
 * and checking for collisions. Calls itself recursively using requestAnimationFrame to maintain
 * continuous gameplay.
 */
function animate() {
  animationId = requestAnimationFrame(animate); // Calls animate recursively for smooth animation
  c.clearRect(0, 0, canvas.width, canvas.height); // Clears the canvas each frame

  // Draw walls
  maze.forEach(wall => wall.draw(c));

  
  player.update(c, canvas, checkWallCollision(), superpelletEaten); // Updates player movement

  // Draw ghosts
  ghosts.forEach((ghost) => {
    if (typeof ghost.update === 'function') {
      ghost.update();
    }
    ghost.draw(c, player);
  });

  //preventGhostOverlap(); // Prevent ghosts from overlapping

  //Draw the score
  drawScore();

  // Draw and check for collision with each pellet
  for (let i = 0; i < pellets.length; i++) {
    pellets[i].draw(c);
    if (pellets[i].checkCollision(player)) {
      if (pellets[i] instanceof SuperPellet){
        ghostsEaten = 0;
        ghosts.forEach((ghost) => ghost.turnFrightened());
        superpelletEaten = true;
        setTimeout(() => {
          superpelletEaten = false;
        }, 7000);
      }
      //add to the score
      score += pellets[i].points;
      // Remove the pellet from the game when it is collected
      pellets.splice(i, 1);
      i--; // Adjust the index to avoid skipping a pellet after removal

    }
  }

  // Check for cherry spawn conditions
  if (
    !cherryHasSpawned &&
    pellets.length <= pelletsAtLevelStart * cherrySpawnThreshold
  ) {
    spawnCherry();
    cherryHasSpawned = true;
  }

  // Draw and check for collision with each cherry
  for (let i = cherries.length - 1; i >= 0; i--) {
    const cherry = cherries[i];
  
    // Remove if marked collected (eaten or despawned)
    if (cherry.collected) {
      cherries.splice(i, 1);
      continue;
    }
  
    cherry.draw(c);
  
    // Check collision and remove/add score only if actually eaten
    if (cherry.checkCollision(player)) {
      score += cherry.points;
      cherries.splice(i, 1);
    }
  }

  // Check for collisions
  checkCollision();

  //Draw lives
  drawLives();

  // Goes to the next level if all pellets in the current level are eaten.
  if (pellets.length == 0 && cherries.length === 0) {
    currentLevel++;
    console.log("level completed", currentLevel);
    drawLevelTransition();

    if (currentLevel <= 3) {
      loadLevel(currentLevel);
    }
    // End the game if all pellets are eaten and levels are completed. 
    else {
      // Update img for end sc
      document.getElementById("endScImg").src = winScreenImg;
      endGame();
      console.log("Game completed!");
    }
  }
}

/**
 * Returns the tunnel bounds for the specified level.
 * @param {number} level - The level number (1, 2, or 3).
 * @returns {Object|null} The tunnel bounds for the specified level, or null if invalid level.
 */
function getTunnelBounds(level) {
  switch (level) {
      case 1: return level1Tunnel;
      case 2: return level2Tunnel;
      case 3: return level3Tunnel;
      default: return null;
  }
}

/**
 * Resets the game state by repositioning the player, resetting lives,
 * clearing ghosts and pellets, and stopping any existing animations.
 */
function resetGame() {
  cancelAnimationFrame(animationId); // Stop the animation loop

  // Reset game score, reset level back to 1 (revert mazes, pellets, 
  // player spawn, ghost spawn), and reset playerLives to 3.
  score = 0;
  currentLevel = 1;
  maze = spawnLevel1();
  pellets = spawnPelletsLevel1();
  player = spawnPlayerLevel1();
  ghosts = spawnGhostsLevel1();
  cherries = [];
  playerLives = 3;

  drawLives();

  player.update(c, canvas);
}

/**
 * Loads the specified level and spawn the correct items according to the level.
 * @param {number} level - The level to load (1, 2, or 3).
 */
function loadLevel(level) {
  cancelAnimation(); // Stop previous level's animation

  switch (level) {
    case 1:
      maze = spawnLevel1();
      pellets = spawnPelletsLevel1();
      pelletsAtLevelStart = pellets.length;
      player = spawnPlayerLevel1();
      ghosts = spawnGhostsLevel1();
      cherryPoints = 100;
      cherryHasSpawned = false;
      break;
    case 2:
      maze = spawnLevel2();
      pellets = spawnPelletsLevel2();
      pelletsAtLevelStart = pellets.length;
      player = spawnPlayerLevel2();
      ghosts = spawnGhostsLevel2();
      cherryPoints = 300;
      cherryHasSpawned = false;
      break;
    case 3:
      maze = spawnLevel3();
      pellets = spawnPelletsLevel3();
      pelletsAtLevelStart = pellets.length;
      player = spawnPlayerLevel3();
      ghosts = spawnGhostsLevel3();
      cherryPoints = 500;
      cherryHasSpawned = false;
      break;
    default:
      console.error('Invalid level:', level);
      return;
  }

  cherries = [];
  currentLevel = level;
  // Start the animation loop
  animate();
}

/**
 * Removes a life from the player.
 * There are 3 lives per game instead of per player, given the structure of our
 * game, everytime a player is reset/killed, it would reset lives to 3. Therefore,
 * the life counter is a variable in the game, not player. 
 * @param {number} life - The amount of life to change (positive or negative).
 */
function changeLife(life) {
  playerLives += life; // Decrease or increase life by 1
}

/**
 * Spawns cherry based on the current level, cherry will grant varying points depending
 * on the current level. They despawn after 10/13/15 seconds depending on current level.
 */
function spawnCherry() {
    const spawnSpots = levelCherrySpots[currentLevel]
    const spawnPos = spawnSpots[
        Math.floor(Math.random() * spawnSpots.length)
      ];
    let despawnTimeLvl;

    switch(currentLevel) {
      case 1: 
        spawnPos; 
        despawnTimeLvl = 15;
        break;
      case 2: 
        spawnPos; 
        despawnTimeLvl = 18;
        break;
      case 3: 
        spawnPos;
        despawnTimeLvl = 20; 
        break;
    }
  
    cherries.push(new Cherry({
      position: spawnPos,
      despawnTime: despawnTimeLvl,
      points: cherryPoints
    }));
  }

export {
  canvas, player, ghosts, maze, pellets, currentLevel, playerLives, c, score, ghostsEaten, superpelletEaten,
  animate, resetGame, setAnimationId, cancelAnimation, loadLevel, changeLife, getTunnelBounds
};
