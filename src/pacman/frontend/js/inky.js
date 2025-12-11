import { SmartEnemy } from './smartEnemy.js';
import { player, ghosts, canvas } from './game.js';
import { createGrid } from './pathfinding.js';

/**
 * Inky - The cyan ghost that uses Blinky's position to calculate ambush targets
 * Target Formula: (Pac-Man's position + 2 tiles ahead) * 2 - Blinky's position
 * @extends SmartEnemy
 */
export class Inky extends SmartEnemy {
  constructor(options) {
    super(options);
    this.scatterTarget = options.scatterTarget; // Bottom-right corner
  }

  /**
   * Calculates Inky's target tile using classic Pac-Man behavior
   * @returns {{x: number, y: number}} Target tile coordinates
   */
  getTargetTile() {
    // Scatter mode target
    if (this.mode === 'scatter') {
      return this.scatterTarget;
    }

    // Find Blinky
    const blinky = ghosts.find((ghost) => ghost.color === 'red');
    if (!blinky) return this.fallbackTarget(); // If Blinky missing

    // Convert positions to tile coordinates
    const playerTile = this.getTileCoordinates(player.position);
    const blinkyTile = this.getTileCoordinates(blinky.position);

    // Get 2 tiles ahead of player's direction
    const { offsetX, offsetY } = this.getPlayerDirectionOffset();

    // Classic Inky target formula
    const targetTile = {
      x: playerTile.x + offsetX * 2 - blinkyTile.x,
      y: playerTile.y + offsetY * 2 - blinkyTile.y
    };

    // Check if Inky is aligned with the grid before doing fallback checking
    const myTile = this.getTileCoordinates(this.position);
    const isAligned =
      Math.abs(this.position.x - (myTile.x * this.tileSize + this.gridOffset)) <
        this.speed * 2 &&
      Math.abs(this.position.y - (myTile.y * this.tileSize + this.gridOffset)) <
        this.speed * 2;

    if (isAligned) {
      // Generate grid 
      const grid = createGrid(this.tileSize, canvas.width, canvas.height);
      // Only use fallback if at an intersection and the target is a wall
      if (!grid[targetTile.y] || grid[targetTile.y][targetTile.x] !== 0) {
        return this.fallbackTarget();
      }
    }

    return targetTile;
  }

  // Get tile coordinates from pixel position
  getTileCoordinates(position) {
    return {
      x: Math.floor(position.x / this.tileSize),
      y: Math.floor(position.y / this.tileSize)
    };
  }

  // Calculate player's direction offset
  getPlayerDirectionOffset() {
    const threshold = 0.1;
    return {
      offsetX:
        player.velocity.x > threshold
          ? 2
          : player.velocity.x < -threshold
          ? -2
          : 0,
      offsetY:
        player.velocity.y > threshold
          ? 2
          : player.velocity.y < -threshold
          ? -2
          : 0
    };
  }

  // Fallback if Blinky isn't found
  fallbackTarget() {
    return this.getTileCoordinates(player.position); // Directly chase Pac-Man
  }
}