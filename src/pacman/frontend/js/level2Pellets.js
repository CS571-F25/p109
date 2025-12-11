/**
 * @file level2Pellets.js
 * @description Pellet placements (x, y) for Level 2.
 */

// // skip level
// export const level2SuperpelletData = [];
// export const level2PelletData = [];
// level2PelletData.push([225, 270]);

const level2X = 420; // Width of the level 2 maze
const level2Y = 470; // Height of the level 2 maze

export const level2SuperpelletData = [
  [20, 20], // Top-left superpellet
  [20, 235], // left superpellet
  [level2X-20, 20], // Top-right superpellet
  [level2X-20, 235], // right superpellet
  [20, level2Y-20], // bottom-left superpellet
  [level2X-20, level2Y-20], // bottom-right superpellet
]

export const level2PelletData = [
  [20, 40],
  [20, 60],
  [20, 80],
  [20, 100], // intersection
  [20, 115],
  [20, 130], // intersection

  [40, 130],
  [60, 130],
  [80, 130],
  [100, 130],
  [120, 130], // intersection
  [140, 130],
  [160, 130], // intersection
  
  [35, 100],
  [50, 100],
  [50, 80],
  [50, 60],
  [50, 40],
  [50, 20],
  [65, 20],
  [80, 20],
  [80, 20],
  [80, 40],
  [80, 60],
  [80, 80],
  [80, 100],
  [100, 100],
  [120, 100], // intersection

  [120, 115],
  [120, 80],
  [120, 60],
  [120, 40],
  [120, 20],
  [140, 20],
  [160, 20],
  [180, 20],
  [200, 20],
  
  [160, 110],
  [175, 110],
  [190, 110],
  [190, 95],
  [190, 80],
  [175, 80],
  [160, 80],
  [160, 65],
  [160, 50],
  [175, 50],
  // [190, 50], // cherry

  [160, 150], // intersection
  [160, 175],
  [160, 200], // intersection
  [160, 222.5],

  [175, 150],
  [190, 150],
  
  [180, 200],
  [200, 200],
  [145, 200],
  [130, 200],
  [130, 220],
  [130, 180],
  [130, 160],
  [110, 160],
  [90, 160],
  [90, 180],
  [90, 200],
  [90, 220],

  [60, 220],
  [60, 200],
  [60, 180],
  [60, 160],
  [40, 160],

  [20, 160],
  [20, 180],
  [20, 200],
  [20, 220],

  [75, 230],


  [level2X-20, 40],
  [level2X-20, 60],
  [level2X-20, 80],
  [level2X-20, 100], // intersection
  [level2X-20, 115],
  [level2X-20, 130], // intersection

  [level2X-40, 130],
  [level2X-60, 130],
  [level2X-80, 130],
  [level2X-100, 130],
  [level2X-120, 130], // intersection
  [level2X-140, 130],
  [level2X-160, 130], // intersection

  [level2X-35, 100],
  [level2X-50, 100],
  [level2X-50, 80],
  [level2X-50, 60],
  [level2X-50, 40],
  [level2X-50, 20],
  [level2X-65, 20],
  [level2X-80, 20],
  [level2X-80, 20],
  [level2X-80, 40],
  [level2X-80, 60],
  [level2X-80, 80],
  [level2X-80, 100],
  [level2X-100, 100],
  [level2X-120, 100], // intersection

  [level2X-120, 115],
  [level2X-120, 80],
  [level2X-120, 60],
  [level2X-120, 40],
  [level2X-120, 20],
  [level2X-140, 20],
  [level2X-160, 20],
  [level2X-180, 20],
  [level2X-200, 20],

  [level2X-160, 110],
  [level2X-175, 110],
  [level2X-190, 110],
  [level2X-190, 95],
  [level2X-190, 80],
  [level2X-175, 80],
  [level2X-160, 80],
  [level2X-160, 65],
  [level2X-160, 50],
  [level2X-175, 50],
  [level2X-190, 50],

  [level2X-160, 150], // intersection
  [level2X-160, 175],
  [level2X-160, 200], // intersection
  [level2X-160, 222.5],

  [level2X-175, 150],
  [level2X-190, 150],

  [level2X-180, 200],
  [level2X-200, 200],
  [level2X-145, 200],
  [level2X-130, 200],
  [level2X-130, 220],
  [level2X-130, 180],
  [level2X-130, 160],
  [level2X-110, 160],
  [level2X-90, 160],
  [level2X-90, 180],
  [level2X-90, 200],
  [level2X-90, 220],

  [level2X-60, 220],
  [level2X-60, 200],
  [level2X-60, 180],
  [level2X-60, 160],
  [level2X-40, 160],

  [level2X-20, 160],
  [level2X-20, 180],
  [level2X-20, 200],
  [level2X-20, 220],

  [level2X-75, 230],


  [20, level2Y-40],
  [20, level2Y-60],
  [20, level2Y-80],
  [20, level2Y-100], // intersection
  [20, level2Y-115],
  [20, level2Y-130], // intersection

  [40, level2Y-130],
  [60, level2Y-130],
  [80, level2Y-130],
  [100, level2Y-130],
  [120, level2Y-130], // intersection
  [140, level2Y-130],
  [160, level2Y-130], // intersection
  
  [35, level2Y-100],
  [50, level2Y-100],
  [50, level2Y-80],
  [50, level2Y-60],
  [50, level2Y-40],
  [50, level2Y-20],
  [65, level2Y-20],
  [80, level2Y-20],
  [80, level2Y-20],
  [80, level2Y-40],
  [80, level2Y-60],
  [80, level2Y-80],
  [80, level2Y-100],
  [100, level2Y-100],
  [120, level2Y-100], // intersection

  [120, level2Y-115],
  [120, level2Y-80],
  [120, level2Y-60],
  [120, level2Y-40],
  [120, level2Y-20],
  [140, level2Y-20],
  [160, level2Y-20],
  [180, level2Y-20],
  [200, level2Y-20],

  [160, level2Y-110],
  [175, level2Y-110],
  [190, level2Y-110],
  [190, level2Y-95],
  [190, level2Y-80],
  [175, level2Y-80],
  [160, level2Y-80],
  [160, level2Y-65],
  [160, level2Y-50],
  [175, level2Y-50],
  [190, level2Y-50],

  [160, level2Y-150], // intersection
  [160, level2Y-175],
  [160, level2Y-200], // intersection
  [160, level2Y-222.5],

  [175, level2Y-150],
  [190, level2Y-150],
  
  [180, level2Y-200],
  [200, level2Y-200],
  [145, level2Y-200],
  [130, level2Y-200],
  [130, level2Y-220],
  [130, level2Y-180],
  [130, level2Y-160],
  [110, level2Y-160],
  [90, level2Y-160],
  [90, level2Y-180],
  [90, level2Y-200],
  [90, level2Y-220],

  [60, level2Y-220],
  [60, level2Y-200],
  [60, level2Y-180],
  [60, level2Y-160],
  [40, level2Y-160],

  [20, level2Y-160],
  [20, level2Y-180],
  [20, level2Y-200],
  [20, level2Y-220],


  [level2X-20, level2Y-40],
  [level2X-20, level2Y-60],
  [level2X-20, level2Y-80],
  [level2X-20, level2Y-100], // intersection
  [level2X-20, level2Y-115],
  [level2X-20, level2Y-130], // intersection

  [level2X-40, level2Y-130],
  [level2X-60, level2Y-130],
  [level2X-80, level2Y-130],
  [level2X-100, level2Y-130],
  [level2X-120, level2Y-130], // intersection
  [level2X-140, level2Y-130],
  [level2X-160, level2Y-130], // intersection

  [level2X-35, level2Y-100],
  [level2X-50, level2Y-100],
  [level2X-50, level2Y-80],
  [level2X-50, level2Y-60],
  [level2X-50, level2Y-40],
  [level2X-50, level2Y-20],
  [level2X-65, level2Y-20],
  [level2X-80, level2Y-20],
  [level2X-80, level2Y-20],
  [level2X-80, level2Y-40],
  [level2X-80, level2Y-60],
  [level2X-80, level2Y-80],
  [level2X-80, level2Y-100],
  [level2X-100, level2Y-100],
  [level2X-120, level2Y-100], // intersection

  [level2X-120, level2Y-115],
  [level2X-120, level2Y-80],
  [level2X-120, level2Y-60],
  [level2X-120, level2Y-40],
  [level2X-120, level2Y-20],
  [level2X-140, level2Y-20],
  [level2X-160, level2Y-20],
  [level2X-180, level2Y-20],
  [level2X-200, level2Y-20],

  [level2X-160, level2Y-110],
  [level2X-175, level2Y-110],
  [level2X-190, level2Y-110],
  [level2X-190, level2Y-95],
  [level2X-190, level2Y-80],
  [level2X-175, level2Y-80],
  [level2X-160, level2Y-80],
  [level2X-160, level2Y-65],
  [level2X-160, level2Y-50],
  [level2X-175, level2Y-50],
  // [level2X-190, level2Y-50],  // cherry

  [level2X-160, level2Y-150], // intersection
  [level2X-160, level2Y-175],
  [level2X-160, level2Y-200], // intersection
  [level2X-160, level2Y-222.5],

  [level2X-175, level2Y-150],
  [level2X-190, level2Y-150],

  [level2X-180, level2Y-200],
  [level2X-200, level2Y-200],
  [level2X-145, level2Y-200],
  [level2X-130, level2Y-200],
  [level2X-130, level2Y-220],
  [level2X-130, level2Y-180],
  [level2X-130, level2Y-160],
  [level2X-110, level2Y-160],
  [level2X-90, level2Y-160],
  [level2X-90, level2Y-180],
  [level2X-90, level2Y-200],
  [level2X-90, level2Y-220],

  [level2X-60, level2Y-220],
  [level2X-60, level2Y-200],
  [level2X-60, level2Y-180],
  [level2X-60, level2Y-160],
  [level2X-40, level2Y-160],

  [level2X-20, level2Y-160],
  [level2X-20, level2Y-180],
  [level2X-20, level2Y-200],
  [level2X-20, level2Y-220],
];