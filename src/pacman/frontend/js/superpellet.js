import { Pellet } from "./pellet.js";

export class SuperPellet extends Pellet {
    /**
     * Creates a new SuperPellet instance.
     * @param {Object} options - The options for the super pellet.
     * @param {Object} options.position - The position of the super pellet.
     * @param {number} options.position.x - The x-coordinate.
     * @param {number} options.position.y - The y-coordinate.
     * @param {number} [options.radius=5] - The radius of the super pellet.
     */
    constructor({ position, radius = 3 }) {
        super({ position, color: 'tan', radius, points: 200 });
        
        /**
         * Whether the pellet is currently visible.
         * @type {boolean}
         */
        this.visible = true;

        // Toggle visibility every 500ms
        setInterval(() => {
            this.visible = !this.visible;
        }, 500);
    }

    /**
     * Draws the super pellet on the canvas, blinking every half second.
     * @param {CanvasRenderingContext2D} c - The 2D rendering context of the canvas.
     */
    draw(c) {
        if (!this.collected && this.visible) {
            c.beginPath();
            c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        }
    }
}
