import { Enemy } from './enemy.js';
import { bfs, createGrid } from './pathfinding.js';
import { canvas, player } from './game.js';

/**
 * A smarter ghost enemy that uses pathfinding (BFS) to chase the player.
 * This class can be extended by specific ghosts like Blinky, Pinky, etc.
 * 
 * Inherits drawing and base properties from the Enemy class, and adds:
 * - Pathfinding using a grid
 * - Grid-based movement
 * - Customizable targeting via `getTargetTile()`
 * 
 * @extends Enemy
 */
export class SmartEnemy extends Enemy {
  /**
   * Creates a new SmartEnemy instance.
   * 
   * @param {Object} options - Configuration for the enemy.
   * @param {{x: number, y: number}} options.spawnPosition - Spawn point.
   * @param {{x: number, y: number}} options.position - Current position.
   * @param {string} options.color - Visual color of the ghost.
   * @param {number} options.size - Radius of the ghost for rendering.
   */
  constructor(options) {
    super(options);
    this.tileSize = 10;
    this.speed = 0.2;
    this.currentDirection = { x: 0, y: -0.05 };
    this.nextDirection = null; // Store next direction when not aligned
    this.gridOffset = this.tileSize / 2;
    this.mode = 'chase'; // All ghosts start in chase mode
    // this.modeTimer = 0; // Time in current mode
    // this.modeCooldown = 0; // Cooldown between switching
    this.scatterTarget = options.scatterTarget;
    this.wallHitCooldown = 0;
    this.baseSpeed = this.speed; // Store original speed
    this.spawnTile = {
      x: Math.floor(options.spawnPosition.x / this.tileSize),
      y: Math.floor(options.spawnPosition.y / this.tileSize)
    };
    this.eaten = false;
    this.scatterTarget = options.scatterTarget 
    this.modeStartTime = performance.now(); // Initialize when the mode started
    this.currentModeDuration = () => this.mode === 'chase' ? 20000 : 7000; // Modes alternates between 7 seconds of scatter and 20 of chase.
  }

  /**
   * Updates the enemy's position based on pathfinding.
   * Recalculates a path when aligned with the grid and follows it toward the target tile.
   * Uses BFS for pathfinding on a 2D grid generated from the wall layout.
   */
  // update(deltaTime) {
  //   this.wallHitCooldown = Math.max(0, this.wallHitCooldown - deltaTime);
  //   this.modeTimer += deltaTime;
  //   this.modeCooldown = Math.max(0, this.modeCooldown - deltaTime);

  //   if (this.wallHitCooldown > 0) {
  //     return; // Skip this frame's logic if cooling down
  //   }    

  //   // Classic Pac-Man mode schedule (seconds)
  //   if (this.modeTimer >= this.currentModeDuration()) {
  //       this.switchMode();
  update() {
    // Check mode switch using absolute time
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.modeStartTime;

    if (elapsedTime >= this.getCurrentModeDuration()) {
      this.switchMode();
      this.modeStartTime = currentTime; // Reset timer
    }
    
    // Generate walkable grid from wall data
    const grid = createGrid(this.tileSize, canvas.width, canvas.height);

    // Convert positions to grid coordinates
    const myTile = {
      x: Math.floor(this.position.x / this.tileSize),
      y: Math.floor(this.position.y / this.tileSize)
    };

    let targetTile;
    const playerTile = {
      x: Math.floor(player.position.x / this.tileSize),
      y: Math.floor(player.position.y / this.tileSize)
    };

    if (this.eaten) {
      // Go back to spawn
      targetTile = this.spawnTile;
      this.speed = this.baseSpeed * 4;
      
      // Reset eaten state if ghost reaches spawn
      if (myTile.x === this.spawnTile.x && myTile.y === this.spawnTile.y) {
        this.eaten = false;
        this.frightened = false;
        this.speed = this.baseSpeed;
        this.color = this.originalColor;
      }
    } else if (this.frightened) {
      // Flee from player
      const dx = myTile.x - playerTile.x;
      const dy = myTile.y - playerTile.y;
      const magnitude = Math.sqrt(dx * dx + dy * dy) || 1;
      const unitX = dx / magnitude;
      const unitY = dy / magnitude;
      let found = false;
      for (let distance = 4; distance >= 1; distance--) {
        const testX = Math.round(myTile.x + unitX * distance);
        const testY = Math.round(myTile.y + unitY * distance);
        if (
          testY >= 0 && testY < grid.length &&
          testX >= 0 && testX < grid[0].length &&
          grid[testY][testX] === 0
        ) {
          targetTile = { x: testX, y: testY };
          found = true;
          break;
        }
      }
      if (!found) {
        const walkableTiles = [];
        for (let y = 0; y < grid.length; y++) {
          for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] === 0) {
              walkableTiles.push({ x, y });
            }
          }
        }
        targetTile = walkableTiles[Math.floor(Math.random() * walkableTiles.length)];
      }
    } else {
      // targetTile = this.getTargetTile
      // SmartEnemy still works normally, but Blinky Pinky, Inky, Clyde can override targeting.
      targetTile = this.getTargetTile
        ? this.getTargetTile()
        : playerTile;
    }

    // Check if enemy is aligned with the grid (center of a tile)
    const isAligned =
      Math.abs(this.position.x - (myTile.x * this.tileSize + this.gridOffset)) < this.speed * 2 &&
      Math.abs(this.position.y - (myTile.y * this.tileSize + this.gridOffset)) < this.speed * 2;

    // Only recalculate path when aligned with grid
    if (isAligned) {
      const path = bfs(myTile, targetTile, grid);
      /*
      if (this.color === 'green') {
        console.log(
          `[INKY] From: (${myTile.x},${myTile.y}) → ` +
          `To: (${targetTile.x},${targetTile.y}) | ` +
          `Path: ${path?.length || 'NONE'}\n` +
          `Grid at target: ${grid[targetTile.y]?.[targetTile.x] === 0 ? 'WALKABLE' : 'WALL'}`
        );
        
        if (path) console.log("Full path:", path);
      }*/
      if (path && path.length > 1) {
        path.shift(); // Remove current tile from path
        const next = path[0];
        this.nextDirection = {
          x: next.x - myTile.x,
          y: next.y - myTile.y
        };
      }

      // When aligned, apply the next direction
      if (this.nextDirection) {
        this.currentDirection = this.nextDirection;
        this.nextDirection = null;
      }
    }

    // Calculate new position based on current direction/speed
    const newX = this.position.x + this.currentDirection.x * this.speed;
    const newY = this.position.y + this.currentDirection.y * this.speed;
    const newTile = {
      x: Math.floor(newX / this.tileSize),
      y: Math.floor(newY / this.tileSize)
    };

    // // Detect if next movement hits a wall
    // const isBlocked = (
    // newTile.y < 0 || newTile.y >= grid.length ||
    // newTile.x < 0 || newTile.x >= grid[0].length ||
    // grid[newTile.y][newTile.x] !== 0
    // );

    // // Recalculate path if aligned OR stuck
    // if (isAligned || isBlocked) {
    //   const path = bfs(myTile, targetTile, grid);
    //   if (path && path.length > 1) {
    //     path.shift(); // Remove current tile from path
    //     const next = path[0];
    //     this.nextDirection = {
    //       x: next.x - myTile.x,
    //       y: next.y - myTile.y
    //     };
    //   }

    //   // Apply direction immediately if aligned
    //   if (isAligned && this.nextDirection) {
    //     this.currentDirection = this.nextDirection;
    //     this.nextDirection = null;
    //   }
    // }

    // const isStopped = this.currentDirection.x === 0 && this.currentDirection.y === 0;

    // // Force recalculation if aligned AND not moving
    // if (isAligned && isStopped) {
    //   const path = bfs(myTile, targetTile, grid);
    //   if (path && path.length > 1) {
    //     path.shift(); // Skip current tile
    //     const next = path[0];
    //     this.currentDirection = {
    //       x: next.x - myTile.x,
    //       y: next.y - myTile.y
    //     };
    //   }
    // }


    // // Check if movement is valid:
    // // 1. Within grid boundaries
    // // 2. Not a wall tile (0 = walkable)
    // if (
    //   newTile.y >= 0 &&
    //   newTile.y < grid.length &&
    //   newTile.x >= 0 &&
    //   newTile.x < grid[0].length &&
    //   grid[newTile.y][newTile.x] === 0
    // ) {
    //   this.position.x = newX;
    //   this.position.y = newY;
    // } else {
    //   // Snap to center if hitting wall
    //   this.position.x = myTile.x * this.tileSize + this.gridOffset;
    //   this.position.y = myTile.y * this.tileSize + this.gridOffset;
    
    //   // Cancel movement and recalculate on next frame
    //   this.currentDirection = { x: 0, y: 0 };
    //   this.nextDirection = null;

    //   this.wallHitCooldown = 200;
    // }
    if (
      newTile.y >= 0 &&
      newTile.y < grid.length && // Not off grid vertically
      newTile.x >= 0 &&
      newTile.x < grid[0].length && // Not off grid horizontally
      grid[newTile.y][newTile.x] === 0 // Tile is walkable
    ) {
      this.position.x = newX;
      this.position.y = newY;
    } else {
      // If hit a wall, then snap to center and stop
      this.position.x = myTile.x * this.tileSize + this.gridOffset;
      this.position.y = myTile.y * this.tileSize + this.gridOffset;
    }
  }

  /**
   * Returns duration of current mode in milliseconds
   */
  getCurrentModeDuration() {
    // Modes alternates between 7 seconds of scatter and 20 of chase.
    return this.mode === 'chase' ? 20000 : 7000; 
  }

  /**
   * Switches between chase and scatter modes
   */
  switchMode() {
    this.mode = this.mode === 'chase' ? 'scatter' : 'chase';
    
    // Temp debug logging
    try {
        const timestamp = Math.floor(performance.now());
        console.log(`Ghost ${this.color} switched to ${this.mode} at ${timestamp}ms`);
      } catch (e) {
        console.log(`Mode switched to ${this.mode}`); 
      }
  }

  turnFrightened() {

    this.frightened = true;
    this.color = 'blue';

    setTimeout(() => {
        this.frightened = false;
        this.color = this.originalColor;
    }, 7000);
  }

  turnEaten() {
    this.eaten = true;
    this.frightened = false; // Make sure it stops fleeing
  } 
}