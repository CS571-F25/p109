/**
 * @file level1Game.js
 * @description Handles game design for level 1. 
 * All variables here are specific to level 1.
 */

import { Player } from './player.js';
import { SmartEnemy } from './smartEnemy.js';
import { Clyde } from './clyde.js';
import { Pinky } from './pinky.js';
import { Inky } from './inky.js';
import { Pellet } from './pellet.js';
import { SuperPellet } from './superpellet.js';
import { Wall, Door } from './wall.js';
import { level1Maze } from './level1Maze.js';
import { Blinky } from './blinky.js';
import { level1PelletData, level1SuperpelletData } from './level1Pellets.js';

/**
 * The tunnel for level 1. (none yet but its here if we need it)
 * The player can teleport from one side to another.
 * @type {Object}
 * @property {number} left - The left boundary of the tunnel.
 * @property {number} right - The right boundary of the tunnel.
 */
export const level1Tunnel = {
  left: 0,         
  right: 270      
};

/**
 * Creates the maze layout for level 1.
 * Each wall has a position, width, and height.
 * @returns {Wall[]} The array of Walls for level 1.
 */
export function spawnLevel1() {
    const level1 = [];

    for (let i = 0; i < level1Maze.length; i++) {
        const [x, y, width, height] = level1Maze[i];
        level1.push(new Wall({ position: { x, y }, width, height }));
    }
    level1.push(new Door({ position: { x: 130, y: 133 }, width: 20, height: 5 }));

    return level1;
}

/**
 * Places the pellets for level 1.
 * Each pellet has a position.
 * @returns {Pellet[]} The array of Pellets for level 1.
 */
export function spawnPelletsLevel1() {
    const level1Pellets = [];

    for (let i = 0; i < level1SuperpelletData.length; i++) {
      const [ x, y ] = level1SuperpelletData[i];
      level1Pellets.push(new SuperPellet({ position: { x, y } }));
    }

    for (let i = 0; i < level1PelletData.length; i++) {
        const [ x, y ] = level1PelletData[i];
        level1Pellets.push(new Pellet({ position: { x, y } }));
    }

    return level1Pellets;
}

/**
 * Spawns an array of ghost enemies with different colors and positions.
 * 
 * @returns {SmartEnemy[]} An array of ghost enemies.
 */
export function spawnGhosts() {
  const ghosts = [];
  const size = 7.5;
  const colors = ['red', 'pink', 'cyan', 'orange'];
  const tileSize = 10;

  const baseCol = 12; // starting column for ghost 0
  const row = 16;     // row where ghosts spawn

  for (let i = 0; i < 4; i++) {
    const x = (baseCol + i) * tileSize + tileSize / 2;
    const y = row * tileSize + tileSize / 2;

    //Use Blinky for the first ghost
    if (i === 0) {
      ghosts.push(new Blinky({
        spawnPosition: { x, y },
        position: { x, y },
        color: colors[i],
        size
      }));
    } else if (i === 1) { // Pinky for the second ghost
        ghosts.push(new Pinky({
          spawnPosition: { x, y },
          position: { x, y },
          color: colors[i],
          size,
          scatterTarget: { x: 26, y: 2 } 
        }));
      } else if (i === 2) { // Inky for the second ghost
        ghosts.push(new Inky({
          spawnPosition: { x, y },
          position: { x, y },
          color: colors[i],
          size,
          scatterTarget: { x: 26, y: 29 } 
        }));
      } else if (i === 3) { // Clyde for the fourth ghost
        ghosts.push(new Clyde({
          spawnPosition: { x, y },
          position: { x, y },
          color: colors[i],
          size,
          scatterTarget: { x: 2, y: 29 } 
        }));
      }
  }

  return ghosts;
}
  

/**
 * Spawns an the player with a specified position and no velocity.
 * 
 * @returns {Player} The player at its specified position.
 */
export function spawnPlayer() {
    return new Player({
        position: { x: 140, y: 190 },
        velocity: { x: 0, y: 0 }
    });
}

export const level1RespawnPosition = { x: 140, y: 190 };
export const cherrySpawnPosition = { x: 260, y: 100 }; 