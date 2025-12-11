/**
 * @file player.js
 * @description Defines the Player class, representing Pac-Man in the game.
 */

// Imports necessary modules and variables from other files
import { cancelAnimation, currentLevel, animate, player, getTunnelBounds } from './game.js';
import { ghosts } from './game.js'; // Import as a mutable variable
import { level1RespawnPosition, spawnGhosts as spawnGhostsLevel1 } from './level1Game.js';
import { level2RespawnPosition, spawnGhosts as spawnGhostsLevel2 } from './level2Game.js';
import { level3RespawnPosition, spawnGhosts as spawnGhostsLevel3 } from './level3Game.js';

/**
 * Represents the player (Pac-Man) in the game.
 */
export class Player {
    /**
     * Creates a new Player instance.
     * @param {Object} options - The options for the player.
     * @param {Object} options.position - The initial position of the player.
     * @param {number} options.position.x - The x-coordinate of the player.
     * @param {number} options.position.y - The y-coordinate of the player.
     * @param {Object} options.velocity - The initial velocity of the player.
     * @param {number} options.velocity.x - The horizontal movement speed of the player.
     * @param {number} options.velocity.y - The vertical movement speed of the player.
     */
    constructor({ position, velocity }) {
        /**
         * The current position of the player on the canvas.
         * @type {{ x: number, y: number }}
         */
        this.position = position;

        /**
         * The movement velocity of the player.
         * @type {{ x: number, y: number }}
         */
        this.velocity = velocity;

        /**
         * The radius (size) of the player.
         * @type {number}
         */
        this.radius = 6;

        // The following attributes are for animating Pac-Man.

        /**
         * The direction at which the player is facing.
         * Where 'w' is up, 'a' is left, 's' is down, and 'd' is right.
         * Default is 'n'.
         * @type {string}
         */
        this.direction = 'neutral';

        /**
         * The angle of the player's mouth opening.
         * @type {number}
         */
        this.mouthAngle = 0;

        /**
         * The rate at which the player's mouth opens and closes.
         * @type {number}
         */
        this.mouthRate = 0.05;
    }

    /**
     * Draws the player on the canvas.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     * @param {number} startAngle - The starting angle of the player's mouth.
     * @param {number} endAngle - The ending angle of the player's mouth.
     */
    draw(c, startAngle, endAngle) {
        c.beginPath();

        // For easier access to the player's x and y coordinates
        let x = this.position.x;
        let y = this.position.y;

        // As long as the player is moving, animate its mouth opening and closing
        c.arc(x, y, this.radius, startAngle, endAngle);
        c.lineTo(x, y);
        // Default circle for when player spawns in
        if (this.direction == 'neutral') {
            c.arc(x, y, this.radius, 0, Math.PI * 2); // Default circle
        }

        c.fillStyle = 'yellow'; // Sets Pac-Man's color
        c.fill();
        c.closePath();
    }

    /**
     * Updates the player's position and redraws the player on the canvas.
     * Ensures the player does not move out of bounds or go past walls.
     * 
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     * @param {HTMLCanvasElement} canvas - The canvas element where the player moves.
     * @param {boolean} touchingWall - If the player is touching a wall, stop movement
     * @param {boolean} superpelletEaten - if superpellet has been eaten, should be slightly faster
     */
    update(c, canvas, touchingWall, superpelletEaten) {
        // Reset the mouth angle if it reaches the maximum or minimum
        if (this.mouthAngle > Math.PI / 4 || this.mouthAngle < 0) {
            this.mouthRate = -this.mouthRate;
        }

        // Increase the angle at which Pac-mans mouth opens and closes
        this.mouthAngle += this.mouthRate;

        // Draw Pac-Man based on which direction it's in
        if (this.direction == 'up') {
            this.draw(c, 3 * Math.PI / 2 + this.mouthAngle,
                2 * Math.PI + 3 * Math.PI / 2 - this.mouthAngle);
        } else if (this.direction == 'left') {
            this.draw(c, Math.PI + this.mouthAngle,
                2 * Math.PI + Math.PI - this.mouthAngle);
        } else if (this.direction == 'down') {
            this.draw(c, Math.PI / 2 + this.mouthAngle,
                2 * Math.PI + Math.PI / 2 - this.mouthAngle);
        } else if (this.direction == 'right') {
            this.draw(c, this.mouthAngle,
                2 * Math.PI - this.mouthAngle);
        } else {
            this.draw(c, 0, Math.PI * 2);
        }

        // Ensure the player stays within canvas boundaries before updating position
        if (touchingWall) {
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        const tunnel = getTunnelBounds(currentLevel);

        if (tunnel) {
            // Handle teleportation from left to right
            if (this.position.x <= tunnel.left) {
            this.position.x = tunnel.right+10;
            }
            // Handle teleportation from right to left
            else if (this.position.x >= tunnel.right+10) {
            this.position.x = tunnel.left;
            }
        }

        if (superpelletEaten) {
            this.position.x += this.velocity.x*1.5;
            this.position.y += this.velocity.y*1.5;
        }
        else {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
}


/**
 * Respawns the player when it collides with the ghost, resetting position and ghosts' positions.
 */
function respawnPlayer() {
    cancelAnimation(); // Pause the game
    console.log("Respawning in 3 seconds...");

    setTimeout(() => {
        // Reset Pac-Man's position based on the current level
        switch (currentLevel) {
            case 1:
                player.position = { ...level1RespawnPosition };
                ghosts.length = 0; // Remove all ghosts
                ghosts.push(...spawnGhostsLevel1()); // Readd them from spawn pos
                break;
            case 2:
                player.position = { ...level2RespawnPosition };
                ghosts.length = 0; // Remove all ghosts
                ghosts.push(...spawnGhostsLevel2()); // Readd them from spawn pos
                break;
            case 3:
                player.position = { ...level3RespawnPosition };
                ghosts.length = 0; // Remove all ghosts
                ghosts.push(...spawnGhostsLevel3()); // Readd them from spawn pos
                break;
            default:
                console.error('Invalid level:', currentLevel);
                return;
        }
        player.velocity = { x: 0, y: 0 };

        // Resume the game loop
        animate();
    }, 3000); // 3 second delay before respawning
}

/**
 * Flashes the screen red when Pac-Man loses a life.
 */
function flashScreen() {
    const flash = document.createElement("div");
    flash.style.position = "absolute";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; // Semi-transparent red
    flash.style.zIndex = "999"; // Ensure it overlays the game
    flash.style.pointerEvents = "none"; // Prevent interference with gameplay
    document.body.appendChild(flash);

    setTimeout(() => {
        document.body.removeChild(flash); // Remove flash effect after 300 ms
    }, 300);
}

export { respawnPlayer, flashScreen };