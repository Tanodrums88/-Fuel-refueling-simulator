import * as React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useRefuelingContext } from "../../store/RefuelingContext";

export default function StorageDetails({ fuel }: { fuel: string }) {
  const { tankStatus, registerData } = useRefuelingContext();

  const fuelFilter = tankStatus.filter((e) => e.type === fuel);
  const fuelType = fuelFilter.map((e) => e.type);
  const fuelPresent = fuelFilter.map((e) => e.fuelPresent.toFixed(2));

  const registerFilter = registerData.filter((e) => e.fuel === fuel);
  const lastRefueling = registerFilter[registerFilter.length - 1];

  return (
    <Card sx={{ textAlign: "center" }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="h3">
            {fuelType}
          </Typography>
          <Typography
            variant="h5"
            component="h5">
            There are currently {fuelPresent} liters of this type of fuel in the
            tanks
          </Typography>
          <Typography
            variant="h5"
            component="h5">
            Last refueling recorded:{" "}
            {lastRefueling ? lastRefueling.date : "No refueling recorded"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
