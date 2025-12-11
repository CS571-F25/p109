/**
 * @file level3Game.js
 * @description Handles game design for level 3.
 * All variables here are specific to level 3.
 */

import { Player } from './player.js';
import { SmartEnemy } from './smartEnemy.js';
import { Blinky } from './blinky.js';
import { Pinky } from './pinky.js';
import { Inky } from './inky.js';
import { Clyde } from './clyde.js';
import { Pellet } from './pellet.js';
import { Wall, Door } from './wall.js';
import { level3Maze } from './level3Maze.js';
import { SuperPellet } from './superpellet.js';
import { level3PelletData, level3SuperpelletData } from './level3Pellets.js';

/**
 * The tunnel for level 3.
 * The player can teleport from one side to another.
 * @type {Object}
 * @property {number} left - The left boundary of the tunnel.
 * @property {number} right - The right boundary of the tunnel.
 */
export const level3Tunnel = {
  left: 0,         
  right: 550      
};

/**
 * Creates the maze layout for level 3.
 * Each wall has a position, width, and height.
 * @returns {Wall[]} The array of Walls for level 3.
 */
export function spawnLevel3() {
    const level3 = [];
  
    for (let i = 0; i < level3Maze.length; i++) {
      const [x, y, width, height] = level3Maze[i];
      level3.push(new Wall({ position: { x, y }, width, height }));
    }
    level3.push(new Door({ position: { x: 270, y: 292 }, width: 20, height: 5 }));
  
    return level3;
}

/**
 * Places the pellets for level 3.
 * Each pellet has a position.
 * @returns {Pellet[]} The array of Pellets for level 3.
 */
export function spawnPelletsLevel3() {
    const level3Pellets = [];

    for (let i = 0; i < level3SuperpelletData.length; i++) {
        const [ x, y ] = level3SuperpelletData[i];
        level3Pellets.push(new SuperPellet({ position: { x, y } }));
    }
    

    for (let i = 0; i < level3PelletData.length; i++) {
        const [ x, y ] = level3PelletData[i];
        level3Pellets.push(new Pellet({ position: { x, y } }));
    }

    return level3Pellets;
}

/**
 * Spawns an array of ghost enemies with different colors and positions.
 * 
 * @returns {SmartEnemy[]} An array of ghost enemies.
 */
export function spawnGhosts() {
    const ghosts = [];
    const colors = ['red', 'pink', 'cyan', 'orange'];
    const size = 7.5;
  
    for (let i = 0; i < 4; i++) { //why was this the only game with hardcoded ghost positions?
      const x = 262.5 + 12.5 * i;
      const y = 325;
  
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
          scatterTarget: { x: 54, y: 1 } 
        }));
      } else if (i === 2) { // Inky for the second ghost
        ghosts.push(new Inky({
          spawnPosition: { x:285, y:325 },
          position: { x:285, y:325 },
          color: colors[i],
          size,
          scatterTarget: { x: 54, y: 60 } 
        }));
      } else if (i === 3) { // Clyde for the fourth ghost
        ghosts.push(new Clyde({
          spawnPosition: { x, y },
          position: { x, y },
          color: colors[i],
          size,
          scatterTarget: { x: 1, y: 60 } 
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
      position: { x: 280, y: 570 },
      velocity: { x: 0, y: 0 }
    });
  }
  
  export const level3RespawnPosition = { x: 280, y: 570 };
  export const cherrySpawnPosition = [
    { x:  80, y:  125 },
    { x: 510, y:  80 },
    { x: 50, y:  430 },
    { x: 280, y:  390 }
  ];