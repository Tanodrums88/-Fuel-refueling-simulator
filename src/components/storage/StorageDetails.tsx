import * as React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { useRefuelingContext } from "../../store/RefuelingContext";

export default function StorageDetails({ fuel }: { fuel: string }) {
  const { tankStatus, registerData } = useRefuelingContext();

  const fuelFilter = tankStatus.filter((e) => e.type === fuel);
  const fuelType = fuelFilter.map((e) => e.type);
  const fuelPresent = fuelFilter.map((e) => e.fuelPresent.toFixed(2));

  const registerFilter = registerData.filter((e) => e.fuel === fuel);
  const lastRefueling = registerFilter[registerFilter.length - 1];
  const averageCustomers = registerFilter.length;

  function percentageCalculation(tot: number, num: number) {
    return ((num / tot) * 100).toFixed(0);
  }

  const averageFuelUse = percentageCalculation(
    registerData.length,
    averageCustomers
  );

  return (
    <Card>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          sx={{ textAlign: "center" }}>
          {fuelType}
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          gutterBottom>
          There are currently {fuelPresent} liters of this type of fuel in the
          tanks
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
          Average fuel use: {averageFuelUse}%
        </Typography>
      </CardContent>
    </Card>
  );
}
