import React from "react";
import ProgressBar from "./ProgressBar";

function FuelLabel({ name, onlyLabel }: { name: string; onlyLabel: boolean }) {
  let fuelLabel: React.ReactElement;

  if (name === "PETROL") {
    fuelLabel = (
      <div className="petrolLabel">
        <h2>E10</h2>
      </div>
    );
  }

  if (name === "DIESEL") {
    fuelLabel = (
      <div className="dieselLabel">
        <h2>B10</h2>
      </div>
    );
  }

  if (name === "LPG") {
    fuelLabel = (
      <div className="lpgLabel">
        <h2>LPG</h2>
      </div>
    );
  }

  if (name === "METHANE") {
    fuelLabel = (
      <div className="methaneLabel">
        <h2>CNG</h2>
      </div>
    );
  }

  return (
    <div className="fuelLabels">
      {fuelLabel}
      {onlyLabel ? "" : <ProgressBar />}
    </div>
  );
}

export default FuelLabel;
