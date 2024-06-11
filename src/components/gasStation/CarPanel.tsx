import React, { useEffect, useState } from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";

import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";

function CarPanel() {
  const { refuelingInProgress, refuelings, stopRefueling } =
    useRefuelingContext();

  const [l, setL] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);

  let missingFuel = refuelings.missingFuel;

  if (l >= missingFuel) {
    refuelings.refuelingComplete = true;
  }

  const stopRefuelingIsFull = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    if (refuelingInProgress) {
      let newIntervalId = setInterval(() => {
        setL((l) => l + 0.054);
      }, 50);
      setIntervalId(newIntervalId);
    }
    if (!refuelingInProgress) {
      stopRefuelingIsFull();
    }
    if (refuelings.refuelingComplete) {
      stopRefueling();
      stopRefuelingIsFull();
    }
  }, [refuelingInProgress, refuelings.refuelingComplete]);

  return (
    <div className="panelCar">
      <TimeToLeaveIcon
        className={
          refuelingInProgress
            ? "gasStationIconIsRunning"
            : "gasStationIcon" && refuelings.refuelingComplete
            ? "gasStationIconIsFull"
            : "gasStationIcon"
        }
      />
      <progress
        max={refuelings.missingFuel}
        value={l}
      />
    </div>
  );
}

export default CarPanel;
