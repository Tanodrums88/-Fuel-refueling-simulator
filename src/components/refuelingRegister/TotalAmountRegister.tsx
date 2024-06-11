import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import React from "react";
import {
  type RefuelingData,
  useRefuelingContext,
} from "../../store/RefuelingContext.tsx";

function TotalAmountRegister() {
  const { registerData, tankStatus } = useRefuelingContext();

  const petrolData: RefuelingData[] = registerData.filter(
    (d) => d.fuel === "PETROL"
  );
  const dieselData: RefuelingData[] = registerData.filter(
    (d) => d.fuel === "DIESEL"
  );
  const lpgData: RefuelingData[] = registerData.filter((d) => d.fuel === "LPG");
  const methaneData: RefuelingData[] = registerData.filter(
    (d) => d.fuel === "METHANE"
  );

  function refuelingLitreCount(array: RefuelingData[]) {
    const [...arrayRefuelingLitre] = array.map((e) => e.refuelingLitre);
    if (arrayRefuelingLitre.length <= 0) {
      return 0;
    } else {
      let result: number = arrayRefuelingLitre.reduce(
        (sum, current) => sum + current
      );
      return result.toFixed(2);
    }
  }

  function refuelingAmountCount(array: RefuelingData[]) {
    const [...arrayRefuelingAmount] = array.map((e) => e.amount);
    if (arrayRefuelingAmount.length <= 0) {
      return 0;
    } else {
      let result: number = arrayRefuelingAmount.reduce(
        (sum, current) => sum + current
      );
      return result.toFixed(2);
    }
  }

  type Data = {
    fuel: string;
    numRefuelings: number;
    refuelingLitre: number;
    amount: number;
  };

  const dataRegister: Data[] = [
    {
      fuel: "PETROL",
      numRefuelings: petrolData.length,
      refuelingLitre: +refuelingLitreCount(petrolData),
      amount: +refuelingAmountCount(petrolData),
    },
    {
      fuel: "DIESEL",
      numRefuelings: dieselData.length,
      refuelingLitre: +refuelingLitreCount(dieselData),
      amount: +refuelingAmountCount(dieselData),
    },
    {
      fuel: "LPG",
      numRefuelings: lpgData.length,
      refuelingLitre: +refuelingLitreCount(lpgData),
      amount: +refuelingAmountCount(lpgData),
    },
    {
      fuel: "METHANE",
      numRefuelings: methaneData.length,
      refuelingLitre: +refuelingLitreCount(methaneData),
      amount: +refuelingAmountCount(methaneData),
    },
  ];

  tankStatus[0].fuelPresent =
    tankStatus[0].fuelPresent - dataRegister[0].refuelingLitre;
  tankStatus[1].fuelPresent =
    tankStatus[1].fuelPresent - dataRegister[1].refuelingLitre;
  tankStatus[2].fuelPresent =
    tankStatus[2].fuelPresent - dataRegister[2].refuelingLitre;
  tankStatus[3].fuelPresent =
    tankStatus[3].fuelPresent - dataRegister[3].refuelingLitre;

  const styledTableRow = { background: "grey", color: "white" };

  return (
    <Container maxWidth="md">
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          size="medium"
          aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={styledTableRow}>Type of fuel</TableCell>
              <TableCell
                align="right"
                sx={styledTableRow}>
                Number of refuelings
              </TableCell>
              <TableCell
                align="right"
                sx={styledTableRow}>
                Total liters dispensed
              </TableCell>
              <TableCell
                align="right"
                sx={styledTableRow}>
                Total euros
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRegister.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row">
                  {data.fuel}
                </TableCell>
                <TableCell align="right">{data.numRefuelings}</TableCell>
                <TableCell align="right">{data.refuelingLitre} l</TableCell>
                <TableCell align="right">{data.amount} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TotalAmountRegister;
