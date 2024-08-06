import React, { useEffect, useState } from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";

function Panel() {
  const { refuelings, refuelingInProgress, selectorIsActive } =
    useRefuelingContext();

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

  let panelClass: string = refuelingInProgress
    ? "panelValue panelIsActive"
    : "panelValue panelIsNotActive";

  let priceContent: any = selectorIsActive.amountSelected;

  if (refuelingInProgress) {
    priceContent = formattedPrice;
  }
  if (!refuelingInProgress && l > 0) {
    priceContent = formattedPrice;
  }

  return (
    <div className="panel">
      <div className="boxPanel1">
        <div className={panelClass}>
          <ul>
            <li>{priceContent}</li>
            <li>{formattedLitres}</li>
            <li>{refuelings.price}</li>
          </ul>
        </div>
        <div className="panelLegend">
          <ul>
            <li>€</li>
            <li>L</li>
            <li>€/L</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Panel;
