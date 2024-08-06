import React from "react";
import Selector from "./Selector";
import { useRefuelingContext } from "../../store/RefuelingContext";

function QuantitySelectorButtonsHandler() {
  const { selectorActive } = useRefuelingContext();

  function valueSelectHandler(value: number) {
    if (value > 0) {
      selectorActive({
        active: true,
        amountSelected: value,
      });
    } else {
      selectorActive({
        active: false,
        amountSelected: 0,
      });
    }
  }

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
