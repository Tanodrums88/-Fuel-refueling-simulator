import React from "react";
import { useRefuelingContext } from "../../store/RefuelingContext.tsx";

import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

function GasStationIcon() {
  const { refuelings, startRefueling, stopRefueling, refuelingInProgress } =
    useRefuelingContext();

  return (
    <div className="boxIcon">
      <button
        type="button"
        onClick={refuelingInProgress ? stopRefueling : startRefueling}>
        <LocalGasStationIcon
          className={
            refuelingInProgress
              ? "gasStationIconIsRunning"
              : "gasStationIcon" && refuelings.refuelingComplete
              ? "gasStationIconIsFull"
              : "gasStationIcon"
          }
        />
        {refuelingInProgress
          ? "Click to stop"
          : "Click to start" && refuelings.refuelingComplete
          ? "Refueling completed"
          : "Click to start"}
      </button>
      <h2>{refuelings.name}</h2>
    </div>
  );
}

export default GasStationIcon;
