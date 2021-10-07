import React, { useState } from "react";
import produce from "immer";

const numRows = 20;
const numCols = 20;

function Conways() {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  });
  //   console.log(grid);
  return (
    <div className="grid-container">
      <h2>Try Me</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              key={`${i}-${k}`}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "limegreen" : undefined,
                border: "solid 1px black",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default Conways;
