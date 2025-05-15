# 🐴 Knights Travails

Este proyecto resuelve el problema de encontrar el camino más corto que un caballo puede recorrer en un tablero de ajedrez de 8x8 desde una posición de inicio hasta una de destino.

## 🚀 Tecnologías

- JavaScript (ES6+)
- Webpack
- Estructuras de datos: Grafos implícitos
- Algoritmo utilizado: Búsqueda en Anchura (BFS)

## 📂 Estructura

src/
modules/
knights/
knightMoves.js
knightMoves.test.js
index.js

## 🔧 Uso

```js
import knightMoves from './modules/knights/knightMoves';

knightMoves([0, 0], [7, 7]);
// Salida esperada: Camino más corto con movimientos válidos del caballo
```
