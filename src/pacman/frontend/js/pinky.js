import { SmartEnemy } from './smartEnemy.js';
import { player } from './game.js';

/**
 * Pinky is a specialized SmartEnemy that targets 4 tiles ahead of the player's current direction.
 * This mimics the ambush behavior of the pink ghost in Pac-Man.
 * @extends SmartEnemy
 */
export class Pinky extends SmartEnemy {
  constructor(options) {
    super(options);
    this.scatterTarget = options.scatterTarget; // Top-right corner
    this.ambushDistance = 4; // Tiles ahead to target
  }

  /**
   * Gets the target tile for Pinky's movement.
   * In chase mode, targets 4 tiles ahead of player's current direction.
   * In scatter mode, targets the scatter position.
   * @returns {Object} Target tile coordinates {x, y}
   */
  getTargetTile() {
    // Scatter mode target
    if (this.mode === 'scatter') {
      return this.scatterTarget;
    }
    
    // Get player's current tile
    const playerTile = {
      x: Math.floor(player.position.x / this.tileSize),
      y: Math.floor(player.position.y / this.tileSize)
    };

    // Calculate target based on player's primary movement direction
    const velocityThreshold = 0.1;
    let targetX = playerTile.x;
    let targetY = playerTile.y;

    // Determine primary movement direction
    if (Math.abs(player.velocity.x) > Math.abs(player.velocity.y)) {
      if (player.velocity.x > velocityThreshold) { // Moving right
        targetX += this.ambushDistance;
      } else if (player.velocity.x < -velocityThreshold) { // Moving left
        targetX -= this.ambushDistance;
      }
    } else {
      if (player.velocity.y > velocityThreshold) { // Moving down
        targetY += this.ambushDistance;
      } else if (player.velocity.y < -velocityThreshold) { // Moving up
        targetY -= this.ambushDistance;
      }
    }

    return { x: targetX, y: targetY };
  }
}