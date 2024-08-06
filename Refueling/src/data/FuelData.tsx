import { type FuelSelection } from "../store/RefuelingContext";

const fuelTank = Math.floor(Math.random() * (91 - 75)) + 75;
const fuelPresent = Math.floor(Math.random() * (fuelTank - 5)) + 5;
const missingFuel = fuelTank - fuelPresent;

export const Fuel: Array<FuelSelection> = [
  {
    name: "PETROL",
    price: 1.897,
    fuelTank: fuelTank,
    fuelPresent: fuelPresent,
    missingFuel: missingFuel,
    fuelInserted: 0,
    refuelingComplete: false,
    amount: 0,
  },
  {
    name: "DIESEL",
    price: 1.809,
    fuelTank: fuelTank,
    fuelPresent: fuelPresent,
    missingFuel: missingFuel,
    fuelInserted: 0,
    refuelingComplete: false,
    amount: 0,
  },
  {
    name: "LPG",
    price: 0.698,
    fuelTank: fuelTank,
    fuelPresent: fuelPresent,
    missingFuel: missingFuel,
    fuelInserted: 0,
    refuelingComplete: false,
    amount: 0,
  },
  {
    name: "METHANE",
    price: 1.304,
    fuelTank: fuelTank,
    fuelPresent: fuelPresent,
    missingFuel: missingFuel,
    fuelInserted: 0,
    refuelingComplete: false,
    amount: 0,
  },
];
