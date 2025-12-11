import { SmartEnemy } from './smartEnemy.js';
import { player } from './game.js';

/**
 * Blinky is a specialized SmartEnemy that always targets the player's current tile.
 * This behavior mimics the original red ghost from Pac-Man, who aggressively chases the player.
 * 
 * @extends SmartEnemy
 */
export class Blinky extends SmartEnemy {
  /**
   * Creates a new instance of Blinky.
   * 
   * @param {Object} options - Configuration object for the ghost.
   * @param {{x: number, y: number}} options.spawnPosition - Initial spawn location.
   * @param {{x: number, y: number}} options.position - Current position of the ghost.
   * @param {string} options.color - Color of the ghost.
   * @param {number} options.size - Visual size (radius) of the ghost.
   */
  constructor(options) {
    super(options);
  }

  /**
   * Returns the tile coordinates that Blinky is targeting.
   * For Blinky, this is always the player's current tile.
   * 
   * @returns {{x: number, y: number}} Target tile coordinates
   */
  getTargetTile() {
    return {
      x: Math.floor(player.position.x / this.tileSize),
      y: Math.floor(player.position.y / this.tileSize)
    };
  }
}
