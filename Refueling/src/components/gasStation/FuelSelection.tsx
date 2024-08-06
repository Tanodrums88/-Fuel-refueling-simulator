import React, { useEffect, useState } from "react";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { Fuel } from "../../data/FuelData";

import { useRefuelingContext } from "../../store/RefuelingContext";

export default function FuelSelection() {
  const { refuelingCount, refuelings, refuelingInProgress } =
    useRefuelingContext();

  const [value, setValue] = useState(refuelings.name);

  function selectFuel(event: React.ChangeEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value);
  }

  const FuelFilter = Fuel.filter((el) => {
    return el.name === value;
  });

  const FuelName: string = FuelFilter[0].name;
  const FuelPrice: number = FuelFilter[0].price;
  const FuelTank: number = FuelFilter[0].fuelTank;
  const FuelPresent: number = FuelFilter[0].fuelPresent;
  const MissingFuel: number = FuelFilter[0].missingFuel;

  useEffect(() => {
    refuelingCount({
      name: FuelName,
      price: FuelPrice,
      fuelTank: FuelTank,
      fuelPresent: FuelPresent,
      missingFuel: MissingFuel,
      fuelInserted: 0,
      refuelingComplete: false,
      amount: 0,
    });
  }, [FuelName, FuelPrice, FuelTank, FuelPresent, MissingFuel]);

  return (
    <FormControl className="fuelSelection">
      <FormLabel id="demo-row-radio-buttons-group-label">
        Select the fuel type
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={selectFuel}>
        <FormControlLabel
          disabled={refuelingInProgress ? true : false}
          value={"PETROL"}
          control={<Radio />}
          label={"PETROL"}
        />
        <FormControlLabel
          disabled={refuelingInProgress ? true : false}
          value={"DIESEL"}
          control={<Radio />}
          label={"DIESEL"}
        />
        <FormControlLabel
          disabled={refuelingInProgress ? true : false}
          value={"LPG"}
          control={<Radio />}
          label={"LPG"}
        />
        <FormControlLabel
          disabled={refuelingInProgress ? true : false}
          value={"METHANE"}
          control={<Radio />}
          label={"METHANE"}
        />
      </RadioGroup>
    </FormControl>
  );
}
