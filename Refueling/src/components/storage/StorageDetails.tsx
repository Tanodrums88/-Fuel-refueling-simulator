import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useRefuelingContext } from "../../store/RefuelingContext";
import FuelLabel from "../gasStation/FuelLabel";

export default function StorageDetails({ fuel }: { fuel: string }) {
  const { tankStatus, registerData } = useRefuelingContext();

  const fuelFilter = tankStatus.filter((e) => e.type === fuel);
  const fuelType = fuelFilter.map((e) => e.type);
  const fuelPresent = fuelFilter.map((e) => e.fuelPresent.toFixed(2));

  const registerFilter = registerData.filter((e) => e.fuel === fuel);
  const lastRefueling = registerFilter[registerFilter.length - 1];
  const averageCustomers = registerFilter.length;

  function percentageCalculation(tot: number, num: number): number {
    let result = (num / tot) * 100;
    if (Number.isNaN(result)) {
      return 0;
    }
    return result;
  }

  const averageFuelUse = percentageCalculation(
    registerData.length,
    averageCustomers
  );

  let cardClass: string;

  if (fuel === "PETROL") {
    cardClass = "cardPetrol";
  }
  if (fuel === "DIESEL") {
    cardClass = "cardDiesel";
  }
  if (fuel === "LPG") {
    cardClass = "cardLpg";
  }
  if (fuel === "METHANE") {
    cardClass = "cardMethane";
  }

  return (
    <Card className={cardClass}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          sx={{ textAlign: "center" }}>
          {fuelType}
        </Typography>
        <div className="cardContent">
          <div>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom>
              There are currently {fuelPresent} liters of this type of fuel in
              the tanks
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom>
              Last refueling recorded:{" "}
              {lastRefueling ? lastRefueling.date : "No refueling recorded"}
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              gutterBottom>
              Average fuel use: {averageFuelUse.toFixed(0)}%
            </Typography>
          </div>
          <div style={{ width: "50%" }}>
            <FuelLabel
              onlyLabel={true}
              name={fuel}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
