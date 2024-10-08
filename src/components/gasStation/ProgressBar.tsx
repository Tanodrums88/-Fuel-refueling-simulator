import React, { useEffect, useState } from "react";
import { useRefuelingContext } from "../../store/RefuelingContext";

function ProgressBar() {
	const { refuelingInProgress, refuelings, stopRefueling, selectorIsActive } =
		useRefuelingContext();

	const [l, setL] = useState<number>(0);
	const [intervalId, setIntervalId] = useState<number>(0);

	let missingFuel = refuelings.missingFuel;

	if (l >= missingFuel) {
		refuelings.refuelingComplete = true;
	}

	let amountComplete = selectorIsActive.amountSelected;

	if (
		refuelings.amount >= amountComplete &&
		refuelingInProgress &&
		selectorIsActive.active
	) {
		refuelings.refuelingComplete = true;
	}

	const stopRefuelingIsFull = () => {
		clearInterval(intervalId);
	};

	useEffect(() => {
		if (refuelingInProgress) {
			let newIntervalId = setInterval(() => {
				setL((l) => l + 0.01);
			}, 10);
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
		<>
			<div className='containerProgressBar'>
				<progress
					max={refuelings.missingFuel}
					value={l}
				/>
			</div>
		</>
	);
}

export default ProgressBar;
