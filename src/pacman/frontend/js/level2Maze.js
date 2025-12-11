/**
 * @file level2Maze.js
 * @description Maze Wall placements (x, y, width, height) for Level 2.
 */

export const level2Maze = [
    // outer walls
    [0, 0, 420, 10],      // Rectangle 46
    [410, 350, 10, 120],  // Rectangle 52
    [0, 140, 10, 190],    // Rectangle 53
    [410, 140, 10, 190],  // Rectangle 54
    [0, 0, 10, 120],      // Rectangle 55
    [0, 350, 10, 120],    // Rectangle 56
    [0, 460, 420, 10],    // Rectangle 57
    [410, 0, 10, 120],    // Rectangle 237

    // top left corner
    [30, 0, 10, 90],      // Rectangle 242
    [30, 110, 80, 10],    // Rectangle 227
    [60, 30, 10, 90],     // Rectangle 243
    [90, 0, 20, 90],      // Rectangle 244

    // top right corner
    [380, 0, 10, 90],     // Rectangle 263
    [310, 110, 80, 10],   // Rectangle 253
    [350, 30, 10, 90],    // Rectangle 264
    [310, 0, 20, 90],     // Rectangle 265

    // top middle
    [130, 30, 160, 10],   // Rectangle 229/255
    [130, 30, 20, 90],    // Rectangle 250
    [270, 30, 20, 90],    // Rectangle 271
    [200, 30, 20, 130],   // Rectangle 273
    [170, 60, 80, 10],    // Rectangle 230/256
    [140, 90, 40, 10],    // Rectangle 231
    [240, 90, 40, 10],    // Rectangle 257
    [170, 120, 80, 20],   // Rectangle 228/254
    [170, 160, 80, 30],   // Rectangle 267

    // middle left
    [10, 140, 140, 10],   // Rectangle 245
    [140, 140, 10, 50],   // Rectangle 276
    [140, 210, 10, 50],   // Rectangle 278
    [140, 280, 10, 50],   // Rectangle 277
    [10, 320, 140, 10],   // Rectangle 191
    [70, 140, 10, 80],    // Rectangle 248
    [70, 240, 10, 80],    // Rectangle 193
    [30, 170, 20, 130],   // Rectangle 247/192
    [100, 170, 20, 130],  // Rectangle 249/194

    // ghost enclosure
    [170, 220, 10, 40],   // Rectangle 47
    [170, 210, 32, 10],   // Rectangle 48
    [218, 210, 32, 10],   // Rectangle 49
    [170, 250, 80, 10],   // Rectangle 204
    // Door - Rectangle 50
    [240, 220, 10, 40],   // Rectangle 51

    // middle right
    [270, 140, 140, 10],  // Rectangle 266
    [270, 140, 10, 50],   // Rectangle 272
    [270, 210, 10, 50],   // Rectangle 275
    [270, 280, 10, 50],   // Rectangle 274
    [270, 320, 140, 10],  // Rectangle 218
    [340, 140, 10, 80],   // Rectangle 269
    [340, 240, 10, 80],   // Rectangle 221
    [300, 170, 20, 130],  // Rectangle 270/222
    [370, 170, 20, 130],  // Rectangle 268/220

    // bottom left corner
    [30, 380, 10, 90],    // Rectangle 187
    [30, 350, 80, 10],    // Rectangle 188
    [60, 350, 10, 90],    // Rectangle 189
    [90, 380, 20, 90],    // Rectangle 190

    // bottom right corner
    [380, 380, 10, 90],   // Rectangle 215
    [310, 350, 80, 10],   // Rectangle 205
    [350, 350, 10, 90],   // Rectangle 216
    [310, 380, 20, 90],   // Rectangle 217

    // bottom middle
    [130, 430, 160, 10],  // Rectangle 196/207
    [130, 350, 20, 90],   // Rectangle 195
    [270, 350, 20, 90],   // Rectangle 223
    [200, 310, 20, 130],  // Rectangle 201
    [170, 400, 80, 10],   // Rectangle 197/208
    [140, 370, 40, 10],   // Rectangle 199
    [240, 370, 40, 10],   // Rectangle 209
    [170, 330, 80, 20],   // Rectangle 202/206
    [170, 280, 80, 30]    // Rectangle 219
];