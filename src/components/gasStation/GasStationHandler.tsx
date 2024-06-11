import React from "react";
import GasStationIcon from "./GasStationIcon.tsx";
import Panel from "./Panel.tsx";
import FuelSelection from "./FuelSelection.tsx";
import FuelLabel from "./FuelLabel.tsx";
import ProgressBar from "./ProgressBar.tsx";
import ButtonAddData from "./ButtonAddData.tsx";

import { useRefuelingContext } from "../../store/RefuelingContext.tsx";

function GasStation() {
  const { refuelings } = useRefuelingContext();

  let buttonContent: JSX.Element;

  if (refuelings.fuelInserted >= 1) {
    buttonContent = <ButtonAddData />;
  } else {
    buttonContent;
  }
  return (
    <>
      <FuelSelection />
      <div className="fuelCalculatorBox">
        <div className="boxControls">
          <GasStationIcon />
          <FuelLabel />
          <ProgressBar />
        </div>
        <Panel />
      </div>
      {buttonContent}
    </>
  );
}

export default GasStation;
