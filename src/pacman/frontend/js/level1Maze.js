/**
 * @file level1Maze.js
 * @description Maze Wall placements (x, y, width, height) for Level 1.
 */

export const level1Maze = [
    // [x, y, width, height]
    // Outer Walls
    [0, 0, 10, 310],    // Rectangle 1
    [0, 0, 280, 10],    // Rectangle 2
    [270, 0, 10, 310],  // Rectangle 3
    [0, 300, 280, 10],  // Rectangle 4

    // bottommost structures
    [130, 230, 20, 50], // Rectangle 5
    [170, 270, 80, 10], // Rectangle 6
    [30, 270, 80, 10],  // Rectangle 7
    [70, 230, 10, 50],  // Rectangle 8
    [200, 230, 10, 50], // Rectangle 9
    
    // protrusions on bottom left/right
    [0, 240, 50, 10],   // Rectangle 10
    [235, 240, 45, 10], // Rectangle 11

    // one row above bottommost
    [150, 200, 70, 10], // Rectangle 12
    [60, 200, 70, 10],  // Rectangle 13
    [30, 200, 10, 20],  // Rectangle 14
    [240, 200, 10, 20], // Rectangle 15
    [170, 200, 10, 50], // Rectangle 16
    [100, 200, 10, 50], // Rectangle 17

    // Ghost Enclosure
    [30, 170, 220, 10],  // Rectangle 18
    [100, 130, 32, 10],  // Rectangle 19
    [170, 140, 10, 40],  // Rectangle 20
    [100, 140, 10, 40],  // Rectangle 21
    [148, 130, 32, 10],  // Rectangle 22
    // Door - Rectangle 23

    // middle protrusions on left/right
    [0, 140, 80, 10],    // Rectangle 24
    [200, 140, 80, 10],  // Rectangle 25
    
    // row above middle protrusions
    [0, 110, 50, 10],    // Rectangle 26
    [230, 110, 50, 10],  // Rectangle 27
    [70, 80, 10, 40],    // Rectangle 28
    [30, 80, 20, 40],    // Rectangle 29
    [230, 80, 20, 40],   // Rectangle 30
    [200, 80, 10, 40],   // Rectangle 31
    
    // middle columns
    [100, 40, 10, 70],   // Rectangle 32
    [170, 40, 10, 70],   // Rectangle 33
    [130, 30, 20, 80],   // Rectangle 34

    // top row
    [170, 0, 10, 20],    // Rectangle 36
    [100, 0, 10, 20],    // Rectangle 37

    [0, 50, 40, 10],     // Rectangle 38
    [240, 50, 40, 10],   // Rectangle 39

    [30, 30, 10, 30],    // Rectangle 40
    [60, 0, 20, 30],     // Rectangle 41
    [200, 0, 20, 30],    // Rectangle 42
    [240, 30, 10, 30],   // Rectangle 43
    
    [60, 50, 20, 10],    // Rectangle 44
    [200, 50, 20, 10]    // Rectangle 45
];