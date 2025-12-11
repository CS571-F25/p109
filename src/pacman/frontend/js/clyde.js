import { SmartEnemy } from './smartEnemy.js';
import { player } from './game.js';

/**
 * Clyde is a specialized SmartEnemy that switches between two modes.
 * If far (>8) tiles, it will chase the player.
 * If close (<=8) tiles, it will scatter back to the bottom left of maze.
 * This mimics the behavior of the orange ghost in the original Pac-Man.
 * @extends SmartEnemy
 */
export class Clyde extends SmartEnemy {
  constructor(options) {
    super(options);
    this.scatterTarget = options.scatterTarget;
  }

  getTargetTile() {
    // Scatter mode target
    if (this.mode === 'scatter') {
        return this.scatterTarget;
    }
    
    const myTile = {
      x: Math.floor(this.position.x / this.tileSize),
      y: Math.floor(this.position.y / this.tileSize)
    };
    const playerTile = {
      x: Math.floor(player.position.x / this.tileSize),
      y: Math.floor(player.position.y / this.tileSize)
    };

    const dx = playerTile.x - myTile.x;
    const dy = playerTile.y - myTile.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Distance-based mode switching
    if (this.mode === 'chase' && distance <= 8) {
      this.switchMode();
      return this.scatterTarget;
    } else if (this.mode === 'scatter' && distance > 10) {
      this.switchMode();
      return playerTile;
    }

    return this.mode === 'scatter' ? this.scatterTarget : playerTile;
  }
}