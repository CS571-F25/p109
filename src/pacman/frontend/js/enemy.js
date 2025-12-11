/**
 * @file enemy.js
 * @description Represents an enemy in the game.
 * Also handles collision between the player and these enemies.
 */

// Imports necessary modules and variables from other files
import { player, ghosts, playerLives, changeLife, score, ghostsEaten, updateScore, incrementGhostsEaten } from './game.js';
// import { SmartEnemy } from './smartEnemy.js'
import { endGame } from './ui.js';
import { flashScreen, respawnPlayer } from './player.js';
import lostScreenImg from '../designs/pac_man_you_lost.PNG';

export class Enemy {
    /**
     * Creates a new Enemy instance.
     * @param {Object} options - The options for the enemy.
     * @param {Object} options.spawnPosition - The spawn position of the enemy.
     * @param {number} options.spawnPosition.x - The spawn x-coordinate of the enemy.
     * @param {number} options.spawnPosition.y - The spawn y-coordinate of the enemy.
     * @param {Object} options.position - The position of the enemy.
     * @param {number} options.position.x - The x-coordinate of the enemy.
     * @param {number} options.position.y - The y-coordinate of the enemy.
     * @param {string} options.color - The color of the enemy.
     * @param {number} options.size - The size of the enemy.
     * @param {boolean} options.frightened - Whether the enemy is frightened
     * @param {boolean} options.eaten - Whether the enemy has been eaten
     */
    constructor({ spawnPosition, position, color, size }) {
        /**
         * The spawn position of the enemy on the canvas.
         * @type {{ x: number, y: number }}
         */
        this.spawnPosition = spawnPosition;
        /**
         * The position of the enemy on the canvas.
         * @type {{ x: number, y: number }}
         */
        this.position = position;

        /**
         * The color of the enemy.
         * @type {string}
         */
        this.color = color;

        /**
         * The size (radius or length) of the enemy.
         * @type {number}
         */
        this.size = size;
        
        /**
         * The frightened state of the enemy.
         * @type {boolean}
         */
        this.frightened = false;

        /**
         * The eaten state of the enemy.
         * @type {boolean}
         */
        this.eaten = false;

        /**
         * The original color of the enemy.
         * @type {string}
         */
        this.originalColor = color;
    }

    /**
     * Draws the animated enemy on the canvas.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     * @param {Object} player - The player instance (needed for eye tracking).
     */
    draw(c, player) {
        //if the enemey is currently eaten, do not draw the body
        if (!this.eaten) {
            c.beginPath();

            // Ghost body (upper semicircle)
            c.arc(this.position.x, this.position.y, this.size, Math.PI, 0);

            // Wavy bottom animation
            let bottomStartX = this.position.x - this.size;
            let bottomEndX = this.position.x + this.size;
            let bottomY = this.position.y + this.size;

            c.lineTo(bottomEndX, bottomY);

            const waveAmplitude = 2; // Height of waves
            const waveFrequency = 0.5; // Controls the number of waves
            const waveSpeed = 0.002; // Slows down wave movement
            const step = 4; // Smaller step for smoother waves

            for (let i = bottomEndX; i >= bottomStartX; i -= step) {
                let wave = Math.sin(i * waveFrequency + Date.now() * waveSpeed) * waveAmplitude;
                c.lineTo(i, bottomY + wave);
            }

            c.lineTo(bottomStartX, bottomY);
            c.lineTo(bottomStartX, this.position.y);
            c.closePath();
            c.fillStyle = this.color;
            c.fill();
        }

        // Ghost eyes
        c.beginPath();
        c.arc(this.position.x - 4, this.position.y - 2.5, 3, 0, Math.PI * 2); // Left eye
        c.arc(this.position.x + 4, this.position.y - 2.5, 3, 0, Math.PI * 2); // Right eye
        c.fillStyle = 'white';
        c.fill();

        // Eye tracking: Make the pupils follow Pac-Man
        let dx = player.position.x - this.position.x;
        let dy = player.position.y - this.position.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance !== 0) {
            dx /= distance; // Normalize vector so pupils don't move outside of eyes
            dy /= distance;
        }

        // Set pupil offset based on direction to Pac-Man
        let pupilOffsetX = dx * 1;
        let pupilOffsetY = dy * 1;

        // Draw pupils
        c.beginPath();
        c.arc(this.position.x - 4 + pupilOffsetX, this.position.y - 2.5 + pupilOffsetY, 1.5, 0, Math.PI * 2);
        c.arc(this.position.x + 4 + pupilOffsetX, this.position.y - 2.5 + pupilOffsetY, 1.5, 0, Math.PI * 2);
        c.fillStyle = 'black';
        c.fill();
    }
}

/**
 * Prevents ghosts from overlapping by maintaining minimum distance
 */
function preventGhostOverlap() {
    const minDistance = 3; // Minimum distance between ghosts

    // Compare each ghost against every other ghost
    for (let i = 0; i < ghosts.length; i++) {
        for (let j = i + 1; j < ghosts.length; j++) {
            // Calculate distance between these two ghosts
            const dx = ghosts[i].position.x - ghosts[j].position.x;
            const dy = ghosts[i].position.y - ghosts[j].position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If ghosts are too close together
            if (distance < minDistance) {
                // Push ghosts apart while maintaining their movement
                const push = (minDistance - distance) / 2;
                // Get direction from ghost j to ghost i
                const angle = Math.atan2(dy, dx);

                // Move ghosts apart along this direction
                ghosts[i].position.x += Math.cos(angle) * push;
                ghosts[i].position.y += Math.sin(angle) * push;
                ghosts[j].position.x -= Math.cos(angle) * push;
                ghosts[j].position.y -= Math.sin(angle) * push;
            }
        }
    }
}

/**
 * Checks for collisions between the player and ghosts.
 * If a collision is detected, the player's life is reduced.
 * Ends the game if the player's lives reaches 0.
 */
function checkCollision() {

    let playerDamaged = false;
    let collidedGhost = null;
    let isFrightened = false;

    ghosts.forEach((ghost) => {
        const distance = Math.hypot(
            player.position.x - ghost.position.x,
            player.position.y - ghost.position.y
        );

        // Define a more stable collision threshold
        const collisionThreshold = player.radius + ghost.size * 0.8;

        // Check for collision
        if (distance < collisionThreshold) {
            if (ghost.frightened == true) {
                collidedGhost = ghost;
                isFrightened = true;
            }
            else if (ghost.eaten == false) {
                playerDamaged = true;
            }
        }
    });

    if (isFrightened) {

        if (!collidedGhost)  return;

        if (collidedGhost.frightened && !collidedGhost.eaten){
            const points = [400, 800, 1600, 3200];
            // score += points[Math.min(ghostsEaten, points.length - 1)];
            updateScore(points[Math.min(ghostsEaten, points.length - 1)]);
            // ghostsEaten++;
            incrementGhostsEaten();
            collidedGhost.turnEaten();
        }  
    }
    else {
        if (playerDamaged) { // Prevent repeated damage
            changeLife(-1); // Reduce player's life by 1
            console.log(`Player lives: ${playerLives}`);
    
            setTimeout(() => {
                playerDamaged = false; // Reset after 1 second
            }, 1000);
    
            if (playerLives > 0) {
                flashScreen(); // Flash red to indicate damage
                respawnPlayer(); // Respawn if lives is above 0
            } else {
                flashScreen(); // Flash red to indicate damage
                // Update img for end sc
                document.getElementById("endScImg").src = lostScreenImg;
                endGame(); // Game over if lives reaches 0
            }
        }
    }
}

export { preventGhostOverlap, checkCollision };
