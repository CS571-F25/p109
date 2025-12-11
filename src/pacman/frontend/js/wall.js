/**
 * @file wall.js
 * @description Defines the Wall class, representing a maze wall in the game.
 * Also handles collision between the player and these walls.
 */

// Imports necessary modules and variables from other files
import { canvas, player, maze, superpelletEaten } from './game.js';

/**
 * Represents a maze wall in the game.
 */
export class Wall {
    /**
     * Creates a new Wall instance.
     * @param {Object} options - The options for the wall.
     * @param {Object} options.position - The initial position of the wall.
     * @param {number} options.position.x - The x-coordinate of the wall.
     * @param {number} options.position.y - The y-coordinate of the wall.
     * @param {number} options.width - The width of the wall.
     * @param {number} options.height - The height of the wall.
     */
    constructor({ position, width, height }) {
        /**
         * The current position (x, y) of the wall on the canvas.
         * @type {{ x: number, y: number }}
         */
        this.position = position;

        /**
         * The width (x-coordinate length) of the wall.
         * @type {number}
         */
        this.width = width;

        /**
         * The height (y-coordinate height) of the wall.
         * @type {number}
         */
        this.height = height;
    }

    /**
     * Draws the wall on the canvas.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     */
    draw(c) {
        c.fillStyle = 'blue'; // Wall color
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

/**
 * Checks for collisions between the player and walls.
 * @returns True if the player is touching a maze wall or the map boundary.
 * @returns False otherwise.
 */
function checkWallCollision() {
    for (let wall of maze) {
        let nextX = player.position.x + player.velocity.x;
        let nextY = player.position.y + player.velocity.y;

        if (superpelletEaten == true) {
            nextX = player.position.x + (player.velocity.x*1.5);
            nextY = player.position.y + (player.velocity.y*1.5);
        }

        let touchingWallBoundary =
            // Right side of Pac-Man collides with left side of wall
            nextX + player.radius >= wall.position.x &&
            // Left side of Pac-Man collides with right side of wall
            nextX - player.radius <= wall.position.x + wall.width &&
            // Bottom of Pac-Man collides with top of wall
            nextY + player.radius >= wall.position.y &&
            // Top of Pac-Man collides with bottom of wall
            nextY - player.radius <= wall.position.y + wall.height;

        if (touchingWallBoundary) {
            return true;
        }
    }

    return false;
}

export { checkWallCollision };

/**
 * Represents a door in the maze.
 */
export class Door extends Wall {
    constructor({ position, width, height }) {
        super({ position, width, height });
    }

    draw(c) {
        c.fillStyle = 'yellow';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
