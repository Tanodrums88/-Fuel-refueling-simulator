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

	useEffect(() => {
		const fuelTank = Math.floor(Math.random() * (91 - 75)) + 75;
		const fuelPresent = Math.floor(Math.random() * (fuelTank - 5)) + 5;
		const missingFuel = fuelTank - fuelPresent;

		refuelingCount({
			name: FuelName,
			price: FuelPrice,
			fuelTank: fuelTank,
			fuelPresent: fuelPresent,
			missingFuel: missingFuel,
			fuelInserted: 0,
			refuelingComplete: false,
			amount: 0,
		});
		console.log(
			`Capienza serbatoio =${fuelTank}, Carburante presente =${fuelPresent}, Carburante mancante =${missingFuel}`
		);
	}, [FuelName, FuelPrice]);

	return (
		<FormControl
			className='fuelSelection'
			style={{ margin: "auto 10vw" }}>
			<FormLabel id='demo-row-radio-buttons-group-label'>
				Select the fuel type
			</FormLabel>
			<RadioGroup
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
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
