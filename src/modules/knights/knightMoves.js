// src/modules/knights/knightMoves.js

function getValidMoves([x, y]) {
    const moves = [
      [1, 2], [2, 1], [-1, 2], [-2, 1],
      [1, -2], [2, -1], [-1, -2], [-2, -1],
    ];
    return moves
      .map(([dx, dy]) => [x + dx, y + dy])
      .filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < 8 && ny < 8);
  }
  
  export function knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());
  
    while (queue.length > 0) {
      const path = queue.shift();
      const current = path[path.length - 1];
  
      if (current[0] === end[0] && current[1] === end[1]) return path;
  
      for (const move of getValidMoves(current)) {
        const key = move.toString();
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([...path, move]);
        }
      }
    }
    return null;
  }
  