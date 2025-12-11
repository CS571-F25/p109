/**
 * @file level2Game.js
 * @description Handles game design for level 2. 
 * All variables here are specific to level 2.
 */

import { Player } from './player.js';
import { SmartEnemy } from './smartEnemy.js';
import { Clyde } from './clyde.js';
import { Pinky } from './pinky.js';
import { Inky } from './inky.js';
import { Pellet } from './pellet.js';
import { Wall, Door } from './wall.js';
import { level2Maze } from './level2Maze.js';
import { SuperPellet } from './superpellet.js';
import { Blinky } from './blinky.js';
import { level2PelletData, level2SuperpelletData } from './level2Pellets.js';

/**
 * The tunnel for level 2.
 * The player can teleport from one side to another.
 * @type {Object}
 * @property {number} left - The left boundary of the tunnel.
 * @property {number} right - The right boundary of the tunnel.
 */
export const level2Tunnel = {
    left: 0,         
    right: 410       
};
  
/**
 * Creates the maze layout for level 2.
 * Each wall has a position, width, and height.
 * @returns {Wall[]} The array of Walls for level 2.
 */
export function spawnLevel2() {
    const level2 = [];
  
    for (let i = 0; i < level2Maze.length; i++) {
        const [x, y, width, height] = level2Maze[i];
        level2.push(new Wall({ position: { x, y }, width, height }));
    }
    level2.push(new Door({ position: { x: 200, y: 213 }, width: 20, height: 5 }));
  
    return level2;
}

/**
 * Places the pellets for level 2.
 * Each pellet has a position.
 * @returns {Pellet[]} The array of Pellets for level 2.
 */
export function spawnPelletsLevel2() {
    const level2Pellets = [];

    for (let i = 0; i < level2SuperpelletData.length; i++) {
        const [ x, y ] = level2SuperpelletData[i];
        level2Pellets.push(new SuperPellet({ position: { x, y } }));
    }

    for (let i = 0; i < level2PelletData.length; i++) {
        const [ x, y ] = level2PelletData[i];
        level2Pellets.push(new Pellet({ position: { x, y } }));
    }

    return level2Pellets;
}

/**
 * Spawns an array of ghost enemies using SmartEnemy class.
 * 
 * @returns {SmartEnemy[]} An array of ghost enemies.
 */
export function spawnGhosts() {
    const ghosts = [];
    const colors = ['red', 'pink', 'cyan', 'orange'];
    const size = 7.5;
    const tileSize = 10;

    // Spawn ghosts in a row inside the ghost house
    const baseCol = 19; // example starting column
    const row = 24;     // example row (adjust as needed)

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
              scatterTarget: { x: 40, y: 2 } 
            }));
          } else if (i === 2) { // Inky for the second ghost
            ghosts.push(new Inky({
              spawnPosition: { x, y },
              position: { x, y },
              color: colors[i],
              size,
              scatterTarget: { x: 40, y: 45 } 
            }));
          } else if (i === 3) { // Clyde for the fourth ghost
            ghosts.push(new Clyde({
            spawnPosition: { x, y },
            position: { x, y },
            color: colors[i],
            size,
            scatterTarget: { x: 2, y: 45 } 
        }));
        }
    }

    return ghosts;
}

/**
 * Spawns the player with a specified position and no velocity.
 * 
 * @returns {Player} The player at its specified position.
 */
export function spawnPlayer() {
    return new Player({
        position: { x: 210, y: 270 },
        velocity: { x: 0, y: 0 }
    });
}

export const level2RespawnPosition = { x: 210, y: 270 };
export const cherrySpawnPosition = [
    { x:  190, y:  50 },
    { x: 230, y:  420 }
  ];