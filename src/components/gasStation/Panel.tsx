import React, { useEffect, useState } from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";

function Panel() {
  const { refuelings, refuelingInProgress } = useRefuelingContext();

  const [l, setL] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>(0);

  refuelings.fuelInserted = l;

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
      return stopRefuelingIsFull();
    }
  }, [refuelingInProgress]);

  const formattedLitres = l.toFixed(2);
  const price = refuelings.price * l;
  const formattedPrice = price.toFixed(2);

  refuelings.fuelInserted = +formattedLitres;
  refuelings.amount = +formattedPrice;

  return (
    <div className="panel">
      <div className="boxPanel1">
        <div className="panelValue">
          <h2>{formattedLitres}</h2>
          <h2>{formattedPrice}</h2>
        </div>
        <div className="panelLegend">
          <h1>Litres</h1>
          <h1>Amount in euros</h1>
        </div>
      </div>

      <div className="panelPrice">
        <h1>Euros per litre</h1>
        <h2>{refuelings.price}</h2>
      </div>
    </div>
  );
}

export default Panel;
