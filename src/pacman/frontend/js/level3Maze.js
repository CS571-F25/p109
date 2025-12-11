/**
 * @file level3Maze.js
 * @description Maze Wall placements (x, y, width, height) for Level 3.
 */

export const level3Maze = [
    // Outer Walls
    [0, 0, 560, 10],      // Rectangle 111
    [0, 0, 10, 300],      // Rectangle 110
    [0, 320, 10, 300],    // Rectangle 5
    [0, 610, 560, 10],    // Rectangle 4
    [550, 0, 10, 300],    // Rectangle 112
    [550, 320, 10, 300],  // Rectangle 6

    // Top Left
    [30, 30, 170, 10],    // Rectangle 123
    [220, 30, 50, 10],    // Rectangle 134
    [190, 30, 10, 280],   // Rectangle 117
    [220, 30, 10, 40],    // Rectangle 119
    [0, 60, 140, 10],     // Rectangle 124/126
    [30, 60, 10, 90],     // Rectangle 113
    [60, 60, 10, 210],    // Rectangle 114/122
    [160, 60, 10, 160],   // Rectangle 116
    [220, 60, 50, 10],    // Rectangle 133
    [260, 60, 10, 70],    // Rectangle 118
    [70, 90, 40, 10],     // Rectangle 135
    [130, 90, 10, 130],   // Rectangle 115
    [200, 90, 40, 10],    // Rectangle 132
    [90, 120, 40, 10],    // Rectangle 136
    [220, 120, 40, 10],   // Rectangle 131
    [70, 150, 40, 10],    // Rectangle 137
    [200, 150, 70, 10],   // Rectangle 127
    [30, 170, 40, 10],    // Rectangle 125
    [30, 180, 10, 90],    // Rectangle 120
    [90, 180, 40, 10],    // Rectangle 138
    [70, 210, 40, 10],    // Rectangle 139
    [70, 240, 100, 10],   // Rectangle 140
    [60, 250, 20, 20],    // Rectangle 175
    [190, 240, 20, 70],   // Rectangle 186
    [100, 270, 50, 10],   // Rectangle 174
    [170, 270, 20, 40],   // Rectangle 173
    [0, 290, 80, 10],     // Rectangle 46

    // Top Right
    [360, 30, 170, 10],   // Rectangle 153
    [290, 30, 50, 10],    // Rectangle 164
    [360, 30, 10, 280],   // Rectangle 147
    [330, 30, 10, 40],    // Rectangle 149
    [420, 60, 140, 10],   // Rectangle 154/156
    [520, 60, 10, 90],    // Rectangle 143
    [490, 60, 10, 210],   // Rectangle 144/152
    [390, 60, 10, 160],   // Rectangle 146
    [290, 60, 50, 10],    // Rectangle 163
    [290, 60, 10, 70],    // Rectangle 148
    [450, 90, 40, 10],    // Rectangle 165
    [420, 90, 10, 130],   // Rectangle 145
    [320, 90, 40, 10],    // Rectangle 162
    [430, 120, 40, 10],   // Rectangle 166
    [300, 120, 40, 10],   // Rectangle 161
    [450, 150, 40, 10],   // Rectangle 167
    [290, 150, 70, 10],   // Rectangle 157
    [490, 170, 40, 10],   // Rectangle 155
    [520, 180, 10, 90],   // Rectangle 150
    [430, 180, 40, 10],   // Rectangle 168
    [450, 210, 40, 10],   // Rectangle 169
    [390, 240, 100, 10],  // Rectangle 170
    [480, 250, 20, 20],   // Rectangle 177
    [350, 240, 20, 70],   // Rectangle 185
    [410, 270, 50, 10],   // Rectangle 171
    [370, 270, 20, 40],   // Rectangle 176
    [480, 290, 80, 10],   // Rectangle 50

    // Middle Left
    [100, 300, 50, 20],   // Rectangle 141

    // Top Middle
    [220, 180, 120, 10],  // Rectangle 158
    [220, 210, 120, 10],  // Rectangle 159

    [230, 240, 100, 10],  // Rectangle 179
    [230, 240, 10, 30],   // Rectangle 180
    [260, 240, 10, 30],   // Rectangle 183
    [290, 240, 10, 30],   // Rectangle 184
    [320, 240, 10, 30],   // Rectangle 181

    // Ghost Enclosure
    [230, 290, 20, 40],   // Rectangle 49
    [230, 290, 40, 10],   // Rectangle 46
    [310, 290, 20, 40],   // Rectangle 50
    [290, 290, 40, 10],   // Rectangle 47
    [170, 330, 220, 20],  // Rectangle 109

    // Bottom Middle
    [220, 370, 120, 10],  // Rectangle 97
    [220, 400, 120, 10],  // Rectangle 96
    [220, 430, 120, 10],  // Rectangle 95

    // Middle Right
    [410, 300, 50, 20],   // Rectangle 172

    // Bottom Left
    [30, 580, 170, 10],   // Rectangle 51
    [220, 580, 50, 10],   // Rectangle 72
    [190, 370, 10, 220],  // Rectangle 68
    [220, 550, 10, 40],   // Rectangle 70
    [0, 550, 140, 10],    // Rectangle 52/59
    [30, 470, 10, 90],    // Rectangle 53
    [60, 350, 10, 210],   // Rectangle 54/58
    [160, 400, 10, 160],  // Rectangle 67
    [220, 550, 50, 10],   // Rectangle 71
    [260, 490, 10, 70],   // Rectangle 73
    [70, 520, 40, 10],    // Rectangle 60
    [130, 400, 10, 130],  // Rectangle 61
    [200, 520, 40, 10],   // Rectangle 76
    [90, 490, 40, 10],    // Rectangle 62
    [220, 490, 40, 10],   // Rectangle 75
    [70, 460, 40, 10],    // Rectangle 63
    [200, 460, 70, 10],   // Rectangle 74
    [30, 440, 40, 10],    // Rectangle 55
    [30, 350, 10, 90],    // Rectangle 56
    [90, 430, 40, 10],    // Rectangle 64
    [70, 400, 40, 10],    // Rectangle 65
    [70, 370, 100, 10],   // Rectangle 66
    [100, 340, 50, 10],    // Rectangle 69
    [0, 320, 80, 10],     // Rectangle 47

    // Bottom Right
    [360, 580, 170, 10],  // Rectangle 90
    [290, 580, 50, 10],   // Rectangle 101
    [360, 370, 10, 220],  // Rectangle 84
    [330, 550, 10, 40],   // Rectangle 86
    [420, 550, 140, 10],  // Rectangle 91/93
    [520, 470, 10, 90],   // Rectangle 80
    [490, 350, 10, 210],  // Rectangle 81/89
    [390, 400, 10, 160],  // Rectangle 83
    [290, 550, 50, 10],   // Rectangle 100
    [290, 490, 10, 70],   // Rectangle 85
    [450, 520, 40, 10],   // Rectangle 102
    [420, 400, 10, 130],  // Rectangle 82
    [320, 520, 40, 10],   // Rectangle 99
    [430, 490, 40, 10],   // Rectangle 103
    [300, 490, 40, 10],   // Rectangle 98
    [450, 460, 40, 10],   // Rectangle 104
    [290, 460, 70, 10],   // Rectangle 94
    [490, 440, 40, 10],   // Rectangle 92
    [520, 350, 10, 90],   // Rectangle 87
    [430, 430, 40, 10],   // Rectangle 105
    [450, 400, 40, 10],   // Rectangle 106
    [390, 370, 100, 10],  // Rectangle 107
    [410, 340, 50, 10],   // Rectangle 108
    [480, 320, 80, 10]    // Rectangle 49
];