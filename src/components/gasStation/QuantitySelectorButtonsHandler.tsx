import React, { useState, useEffect } from "react";
import Selector from "./Selector";
import { useRefuelingContext } from "../../store/RefuelingContext";

function QuantitySelectorButtonsHandler() {
  const { selectorActive } = useRefuelingContext();

  const [values, setValues] = useState<number[]>([]);

  function valueSelectHandler(value: number) {
    setValues([...values, value]);
  }

  useEffect(() => {
    let sum = 0;

    for (var i = 0; i < values.length; i++) {
      sum = sum + values[i];
    }

    if (sum > 0) {
      selectorActive({
        active: true,
        amountSelected: sum,
      });
    }
    if (sum === 0) {
      selectorActive({
        active: false,
        amountSelected: 0,
      });
    }

    if (sum >= 100) {
      sum = 100;
      selectorActive({
        active: true,
        amountSelected: sum
      });
    }
    let lastIndex = values.length;
    let lastValue = values[lastIndex - 1];

    if (lastValue === 0) {
      selectorActive({
        active: false,
        amountSelected: 0,
      });
      setValues([]);
    }
  }, [values]);

  return (
    <div className="quantitySelctorButtonsContainer">
      <Selector onSelectValue={valueSelectHandler} valueSelected={5}>
        5 €
      </Selector>
      <Selector onSelectValue={valueSelectHandler} valueSelected={10}>
        10 €
      </Selector>
      <Selector onSelectValue={valueSelectHandler} valueSelected={20}>
        20 €
      </Selector>
      <Selector onSelectValue={valueSelectHandler} valueSelected={50}>
        50 €
      </Selector>
      <Selector onSelectValue={valueSelectHandler} valueSelected={0}>
        Cancel
      </Selector>
    </div>
  );
}

export default QuantitySelectorButtonsHandler;
