import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useRefuelingContext } from "../../store/RefuelingContext";

export default function RegisterGrid() {
  const { registerData } = useRefuelingContext();
  const styledTableRow = { background: "grey", color: "white" };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: 5 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          sx={{ minWidth: 650 }}
          stickyHeader
          aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={styledTableRow}>Date and Time</TableCell>
              <TableCell sx={styledTableRow}>Plate numbers</TableCell>
              <TableCell sx={styledTableRow}>Type of fuel</TableCell>
              <TableCell sx={styledTableRow}>Price per litre (€)</TableCell>
              <TableCell sx={styledTableRow}>Refueling litres</TableCell>
              <TableCell sx={styledTableRow}>amount (€)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registerData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.plateNumber}</TableCell>
                <TableCell>{data.fuel}</TableCell>
                <TableCell>{data.priceLitre} €</TableCell>
                <TableCell>{data.refuelingLitre} l</TableCell>
                <TableCell>{data.amount} €</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
