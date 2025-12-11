import { maze } from './game.js';

/**
 * Converts the wall-based maze into a 2D grid representation.
 * Each cell in the grid is marked as:
 * - 0: walkable path
 * - 1: wall (non-walkable)
 * 
 * @param {number} tileSize - The size of each tile in pixels.
 * @param {number} canvasWidth - The width of the canvas in pixels.
 * @param {number} canvasHeight - The height of the canvas in pixels.
 * @returns {number[][]} A 2D grid representation of the maze.
 */
export function createGrid(tileSize, canvasWidth, canvasHeight) {
  const cols = Math.floor(canvasWidth / tileSize);
  const rows = Math.floor(canvasHeight / tileSize);
  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Mark grid cells that are occupied by walls
  maze.forEach(wall => {
    const startCol = Math.floor(wall.position.x / tileSize);
    const startRow = Math.floor(wall.position.y / tileSize);
    const endCol = Math.floor((wall.position.x + wall.width) / tileSize);
    const endRow = Math.floor((wall.position.y + wall.height) / tileSize);

    for (let row = startRow; row < endRow; row++) {
      for (let col = startCol; col < endCol; col++) {
        grid[row][col] = 1;
      }
    }
  });

  return grid;
}

/**
 * Performs Breadth-First Search (BFS) to find the shortest path
 * from the start position to the goal position on the grid.
 * 
 * @param {{x: number, y: number}} start - Starting cell coordinates.
 * @param {{x: number, y: number}} goal - Goal cell coordinates.
 * @param {number[][]} grid - The grid representation of the maze.
 * @returns {Array<{x: number, y: number}> | null} An array of coordinates representing the
 *                                                 shortest path, or null if no path is found.
 */
export function bfs(start, goal, grid) {
  const directions = [
    { x: 0, y: -1 }, // up
    { x: 0, y: 1 },  // down
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 }   // right
  ];

  const queue = [[start]]; // paths to explore
  const visited = new Set();
  visited.add(`${start.x},${start.y}`);

  while (queue.length > 0) {
    const path = queue.shift();
    const { x, y } = path[path.length - 1]; // last position in path

    // Goal reached
    if (x === goal.x && y === goal.y) {
      return path;
    }

    // Explore neighbors
    for (let dir of directions) {
      const next = { x: x + dir.x, y: y + dir.y };

      if (
        next.y >= 0 && next.y < grid.length &&
        next.x >= 0 && next.x < grid[0].length &&
        grid[next.y][next.x] === 0 &&
        !visited.has(`${next.x},${next.y}`)
      ) {
        visited.add(`${next.x},${next.y}`);
        queue.push([...path, next]); // extend path
      }
    }
  }

  return null; // no path found
}


