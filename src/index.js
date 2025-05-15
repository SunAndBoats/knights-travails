// src/index.js
import { knightMoves } from './modules/knights/knightMoves.js';

const path = knightMoves([0, 0], [7, 7]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach((coord) => console.log(coord));
