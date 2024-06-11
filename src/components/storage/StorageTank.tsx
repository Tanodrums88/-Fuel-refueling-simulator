import React from "react";

function StorageTank({ fuels }) {
  return (
    <div>
      <ul>
        {fuels.map((fuel: any, index: number) => (
          <li
            key={index}
            style={{ listStyle: "none" }}>
            <h2>
              {fuel.type} - {fuel.fuelPresent.toFixed(2)} l
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StorageTank;
