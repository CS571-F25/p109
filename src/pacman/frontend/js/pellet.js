/**
 * @file pellet.js
 * @description Defines the Pellet class, representing collectible items in the game.
 */

/**
 * Represents a collectible pellet in the game.
 */
export class Pellet {
    /**
     * Creates a new Pellet instance.
     * @param {Object} options - The options for the pellet.
     * @param {Object} options.position - The position of the pellet.
     * @param {number} options.position.x - The x-coordinate of the pellet.
     * @param {number} options.position.y - The y-coordinate of the pellet.
     * @param {string} [options.color='yellow'] - The color of the pellet (default: yellow).
     * @param {number} [options.radius=5] - The radius of the pellet (default: 5).
     */
    constructor({ position, color = 'yellow', radius = 2.5, points = 10}) {
      /**
       * The position of the pellet on the canvas.
       * @type {{ x: number, y: number }}
       */
      this.position = position;
  
      /**
       * The color of the pellet.
       * @type {string}
       */
      this.color = color;
  
      /**
       * The radius (size) of the pellet.
       * @type {number}
       */
      this.radius = radius;
  
      /**
       * Whether the pellet has been collected.
       * @type {boolean}
       */
      this.collected = false;

      /**
       * The amount of points the player gets when it has been collected
       * @type {number}
       */
      this.points = points;
    }
  
    /**
     * Draws the pellet on the canvas.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     */
    draw(c) {
      if (!this.collected) {
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
      }
    }
  
    /**
     * Checks if the player has collided with and collected the pellet.
     * @param {Object} player - The player object.
     * @param {Object} player.position - The position of the player.
     * @param {number} player.position.x - The x-coordinate of the player.
     * @param {number} player.position.y - The y-coordinate of the player.
     * @param {number} player.radius - The radius of the player.
     * @returns {boolean} True if the pellet was collected, false otherwise.
     */
    checkCollision(player) {
      const distance = Math.hypot(
        player.position.x - this.position.x,
        player.position.y - this.position.y
      );
  
      if (distance < player.radius + this.radius) {
        this.collected = true; // Mark the pellet as collected
        return true;
      }
  
      return false; // No collision
    }
  }

/**
 * Represents a collectible cherry in the game
 */
export class Cherry extends Pellet {
    /**
     * Creates a new Cherry instance.
     * @param {Object} options - The options for the cherry.
     * @param {Object} options.position - The position of the cherry.
     * @param {number} options.radius - The radius of the cherry.
     * @param {number} options.despawnTime - Time in seconds before despawn.
     * @param {number} options.points - Points awarded when collected.
     */
    constructor({ position, radius = 5, despawnTime = 10, points = 100 }) {
        super({ position, color: 'red', radius, points });
        this.spawnTime = Date.now();
        this.despawnTimeMs = despawnTime * 1000;
        this.flashStartTime = this.spawnTime + this.despawnTimeMs - 2000;
        this.collected = false;

        // Despawn after despawnTime seconds
        setTimeout(() => {
            this.collected = true;
        }, this.despawnTimeMs);
    }

    /**
     * Draws the cherry, flashing in the last 2 seconds before despawn.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     */
    draw(c) {
        if (this.collected) return;
        const now = Date.now();
        let visible = true;

        // Start flashing 2s before despawn
        if (now >= this.flashStartTime) {
            const flashInterval = 300; 
            const elapsed = now - this.flashStartTime;
            visible = Math.floor(elapsed / flashInterval) % 2 === 0;
        }

        if (!visible) return;

        // Draw cherry body
        super.draw(c);

        // Draw stem
        c.beginPath();
        c.strokeStyle = 'green';
        c.lineWidth = 2;
        c.moveTo(this.position.x, this.position.y - this.radius);
        c.lineTo(this.position.x + 2, this.position.y - this.radius - 2);
        c.stroke();
        c.closePath();

        // Draw leaf
        c.beginPath();
        c.arc(
            this.position.x + 2.5,
            this.position.y - this.radius - 3,
            1.5,
            0,
            Math.PI * 2
        );
        c.fillStyle = 'green';
        c.fill();
        c.closePath();
    }
}
  