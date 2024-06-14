import React from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";
import ProgressBar from "./ProgressBar";

function FuelLabel() {
  const { refuelings } = useRefuelingContext();
  let fuelLabel: React.ReactElement;

  if (refuelings.name === "PETROL") {
    fuelLabel = (
      <div className="petrolLabel">
        <h2>E10</h2>
      </div>
    );
  }

  if (refuelings.name === "DIESEL") {
    fuelLabel = (
      <div className="dieselLabel">
        <h2>B10</h2>
      </div>
    );
  }

  if (refuelings.name === "LPG") {
    fuelLabel = (
      <div className="lpgLabel">
        <h2>LPG</h2>
      </div>
    );
  }

  if (refuelings.name === "METHANE") {
    fuelLabel = (
      <div className="methaneLabel">
        <h2>CNG</h2>
      </div>
    );
  }

  return (
    <div className="fuelLabels">
      {fuelLabel}
      <ProgressBar />
    </div>
  );
}

export default FuelLabel;
